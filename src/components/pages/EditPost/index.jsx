import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { map } from "lodash";
import { withRouter } from "react-router-dom";
import PageLayout from "components/templates/PageLayout";
import PageHeader from "components/organisms/PageHeader";
import TextInputBox from "components/molecules/TextInputBox";
import { NormalButton, AlertButton } from "components/atoms/Buttons";
import { CenteredLoader } from "components/organisms/Loader";
import { firestore } from "utils/firebase/firebase.utils";

//TODO(aida)　データの取得周りはリファクタ必須
const EditPost = props => {
    const { user, match, history } = props;
    const { postId } = match.params;
    const [isLoaded, updateLoaded] = useState(false);
    const [postInput, updatePostInput] = useState(null);
    const postRef = firestore.doc(`posts/${postId}`);

    const onChangeHandle = (e, target) => {
        e.preventDefault();
        updatePostInput({ ...postInput, [target]: e.target.value });
    };

    const onDeleteHandle = e => {
        e.preventDefault();
        try {
            console.log("[delete] deleteing post ...");
            postRef.update({ isDeleted: true }).then(() => {
                history.push(`/`);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmitHandle = async e => {
        e.preventDefault();
        const { title, overview, current, want } = postInput;
        try {
            console.log(`[update] updating post ...`);
            postRef.update({ title, overview, current, want }).then(() => {
                history.push(`/post/${postId}`);
            });
        } catch (error) {
            console.log("error adding comment", error.message);
        }
    };

    useEffect(() => {
        const fetchPost = () => {
            const unsubscribe = postRef.onSnapshot(snapshot => {
                const {
                    title,
                    overview,
                    current,
                    want,
                    user
                } = snapshot.data();
                updatePostInput({ title, overview, current, want, user });
                updateLoaded(true);
            });
            return unsubscribe;
        };
        const unsubscribe = fetchPost();

        return () => {
            unsubscribe();
        };
    }, [postId, postRef]);

    useEffect(() => {
        if (postInput) {
            postInput.user.id !== user.id && history.push(`/`);
        }
    }, [isLoaded]);

    const inputItems = [
        {
            name: "概要",
            input: {
                placeholder: "概要を書いてください...",
                onChange: e => onChangeHandle(e, "overview"),
                value: postInput ? postInput.overview : ""
            },
            textarea: true
        },
        {
            name: "実現したいこと",
            input: {
                placeholder: "実現したいことを書いてください...",
                onChange: e => onChangeHandle(e, "want"),
                value: postInput ? postInput.want : ""
            },
            textarea: true
        },
        {
            name: "困っていること",
            input: {
                placeholder: "困っていることを書いてください...",
                onChange: e => onChangeHandle(e, "current"),
                value: postInput ? postInput.current : ""
            },
            textarea: true
        }
    ];

    return (
        <PageLayout user={user}>
            <PageHeader>{isLoaded ? "編集" : "-----"}</PageHeader>
            {postInput ? (
                <>
                    <TextInputBox
                        name="タイトル"
                        input={{
                            placeholder: "タイトルを入力してください...",
                            onChange: e => onChangeHandle(e, "title"),
                            value: postInput ? postInput.title : ""
                        }}
                    />
                    {map(inputItems, (item, i) => {
                        const { name, input, textarea } = item;
                        return (
                            <StyledDetailInput
                                key={`inpuit-detail_${i}`}
                                name={name}
                                input={input}
                                textarea={textarea}
                            />
                        );
                    })}
                    <StyledButtonWrapper>
                        <AlertButton size="small" onClick={onDeleteHandle}>
                            削除する
                        </AlertButton>
                        <NormalButton size="small" onClick={onSubmitHandle}>
                            更新する
                        </NormalButton>
                    </StyledButtonWrapper>
                </>
            ) : (
                <CenteredLoader />
            )}
        </PageLayout>
    );
};

export default withRouter(EditPost);

const StyledDetailInput = styled(TextInputBox)`
    && {
        :not(:first-child) {
            margin-top: 0.8rem;
        }
    }
`;

const StyledButtonWrapper = styled.div`
    && {
        max-width: 36rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
`;
