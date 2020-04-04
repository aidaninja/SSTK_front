import React, { useEffect, useState } from "react";
import { map } from "lodash";
import PageLayout from "components/templates/PageLayout";
import PageHeader from "components/organisms/PageHeader";
import PostItemList from "components/organisms/PostItemList";
import { firestore } from "utils/firebase/firebase.utils";
import { CenteredLoader } from "components/organisms/Loader";
import ToCreatePostLink from "components/organisms/ToCreatePostLink";

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
                    const { title, postedOn, user, isDeleted } = doc.data();
                    if (!isDeleted) return { id, title, postedOn, user };
                });
                const activeList = fetchedList.filter(list => !!list);
                snapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                        updatePostItems([...activeList]);
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
                {/*TODO(aida) Loader表示の切り替えにaddOnCompleteListener?を使う */}
                {postItems ? (
                    <PostItemList postItems={postItems} />
                ) : (
                    <CenteredLoader />
                )}
                <ToCreatePostLink />
            </PageLayout>
        </>
    );
};

export default Home;
