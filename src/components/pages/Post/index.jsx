import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PageLayout from "components/templates/PageLayout";
import PageHeader from "components/organisms/PageHeader";
import PostOverview from "components/organisms/PostOverview";
import { firestore } from "utils/firebase/firebase.utils";
import CommentSection from "components/organisms/CommentSection";

const Post = props => {
    const { user, match } = props;
    const { postId } = match.params;
    const [post, updatePost] = useState({});
    const [commentItems, updateCommentItems] = useState([]);
    const [comment, updateComment] = useState("");
    const postRef = firestore.doc(`posts/${postId}`);
    useEffect(() => {
        //TODO(aida) utils/firebase/firebase.utilsに切り分ける
        const fetchPost = () => {
            const unsubscribe = postRef.onSnapshot(snapshot => {
                if (!snapshot.exists) return unsubscribe;
                const { commentItems = [], ...postData } = snapshot.data();
                updatePost(postData);
                updateCommentItems(commentItems);
            });
            return unsubscribe;
        };
        const unsubscribe = fetchPost();
        return () => {
            unsubscribe();
        };
    }, []);

    const onSubmitComment = async e => {
        e.preventDefault();
        if (!comment) {
            console.log("[comment] no comment");
            return;
        }
        const snapshot = await postRef.get();
        const currentPostDocument = snapshot.data();
        const { commentItems = [] } = currentPostDocument;
        const createdAt = new Date();
        const newCommentItems = [
            ...commentItems,
            { comment: comment, user: user, createdAt }
        ];
        try {
            updateComment("");
            await postRef.set({
                ...currentPostDocument,
                commentItems: newCommentItems
            });
        } catch (error) {
            updateComment(comment);
            console.log("error adding comment", error.message);
        }
    };

    const onComment = e => {
        e.preventDefault();
        updateComment(e.target.value);
    };

    const commentProps = {
        commentItems: commentItems,
        onSubmitComment: onSubmitComment,
        input: {
            placeholder: "コメントを入力してください...",
            onChange: onComment,
            value: comment
        }
    };

    return (
        // TODO(aida) loading中の表示を追加する
        <PageLayout user={user}>
            <PageHeader>{post.title}</PageHeader>
            <PostOverview {...post} />
            <CommentSection {...commentProps} />
        </PageLayout>
    );
};

export default withRouter(Post);
