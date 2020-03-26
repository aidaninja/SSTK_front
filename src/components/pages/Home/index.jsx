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
        const fetchData = async () => {
            const postListRef = firestore.collection("posts");
            const snapShot = await postListRef.get();
            const fetchedList = map(snapShot.docs, doc => {
                const id = doc.id;
                const { title, postedOn, user } = doc.data();
                return { id, title, postedOn, user };
            });
            updatePostItems(fetchedList);
        };
        fetchData();
    }, []);

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
