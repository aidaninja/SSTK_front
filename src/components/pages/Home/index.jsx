import React, { useEffect, useState } from "react";
import { map } from "lodash";
import PageLayout from "components/templates/PageLayout";
import PageHeader from "components/organisms/PageHeader";
import PostItemList from "components/organisms/PostItemList";
import { firestore } from "utils/firebase/firebase.utils";
import { CenteredLoader } from "components/organisms/Loader";

const Home = props => {
    const { user } = props;
    const [postItems, updatePostItems] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            const postListRef = firestore
                .collection("posts")
                .orderBy("postedOn", "desc");
            const unsubscribe = postListRef.onSnapshot(snapshot => {
                const fetchedList = map(snapshot.docs, doc => {
                    const id = doc.id;
                    const { title, postedOn, user } = doc.data();
                    return { id, title, postedOn, user };
                });
                snapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                        updatePostItems([...fetchedList]);
                    }
                });
            });
            return unsubscribe;
        };
        const unsubscribe = fetchData();
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <PageLayout user={user}>
                <PageHeader>Home</PageHeader>
                {/* TODO(aida)リストがない場合は新規投稿を促す表示をする */}
                {postItems ? (
                    <PostItemList postItems={postItems} />
                ) : (
                    <CenteredLoader />
                )}
            </PageLayout>
        </>
    );
};

export default Home;
