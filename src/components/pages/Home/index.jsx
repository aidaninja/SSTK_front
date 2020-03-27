import React, { useEffect, useState } from "react";
import { map } from "lodash";
import PageLayout from "components/templates/PageLayout";
import PageHeader from "components/organisms/PageHeader";
import PostItemList from "components/organisms/PostItemList";
import { firestore } from "utils/firebase/firebase.utils";

const Home = props => {
    const { user } = props;
    const [postItems, updatePostItems] = useState([]);

    useEffect(() => {
        console.log("top page...");
        const fetchData = () => {
            const postListRef = firestore.collection("posts");
            const unsubscribe = postListRef.onSnapshot(snapshot => {
                const fetchedList = map(snapshot.docs, doc => {
                    const id = doc.id;
                    const { title, postedOn, user } = doc.data();
                    return { id, title, postedOn, user };
                });
                snapshot.docChanges().forEach(change => {
                    const doc = change.doc;
                    if (change.type === "added") {
                        const id = doc.id;
                        const { title, postedOn, user } = doc.data();
                        updatePostItems([
                            ...fetchedList,
                            { id, title, postedOn, user }
                        ]);
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

    console.log(postItems);

    return (
        <>
            <PageLayout user={user}>
                <PageHeader>HOME</PageHeader>
                {/* TODO(aida)リストがない場合は新規投稿を促す表示をする */}
                {/* TODO(aida)ローディング中はローディング表示 */}
                <PostItemList postItems={postItems} />
            </PageLayout>
        </>
    );
};

export default Home;
