import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import PageLayout from "components/templates/PageLayout";
import PageHeader from "components/organisms/PageHeader";
import PostOverview from "components/organisms/PostOverview";
import { firestore } from "utils/firebase/firebase.utils";
import CommentSection from "components/organisms/CommentSection";
import { CenteredLoader } from "components/organisms/Loader";

const Post = props => {
    const { user, match } = props;
    const { postId } = match.params;
    const [post, updatePost] = useState(null);
    const [commentItems, updateCommentItems] = useState(null);
    const [comment, updateComment] = useState("");
    const [isError, setIsError] = useState(false);
    const postRef = firestore.doc(`posts/${postId}`);
    useEffect(() => {
        //TODO(aida) utils/firebase/firebase.utilsに切り分ける
        //TODO(aida) ユーザとコメントや投稿の紐付けを最適化する。現状ユーザ情報が変更されたときに紐づいている要素の情報が更新できていない。
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
            setIsError(true);
            return;
        }
        setIsError(false);
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
        },
        isError: isError
    };

    return (
        // TODO(aida) loading中の表示を追加する
        <PageLayout user={user}>
            {post ? (
                <>
                    <PageHeader>{post.title}</PageHeader>
                    <PostOverview {...post} />
                    <div>
                        <StyledLabel>コメント</StyledLabel>
                        <CommentSection {...commentProps} />
                    </div>
                </>
            ) : (
                <>
                    <PageHeader>-----</PageHeader>
                    <CenteredLoader />
                </>
            )}
        </PageLayout>
    );
};

export default withRouter(Post);

const StyledLabel = styled.p`
    && {
        font-size: 1.4rem;
        padding: 1rem 0;
    }
`;
