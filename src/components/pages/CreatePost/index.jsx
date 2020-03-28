import React, { useState } from "react";
import styled from "styled-components";
import { map } from "lodash";
import PageLayout from "components/templates/PageLayout";
import PageHeader from "components/organisms/PageHeader";
import PostOverview from "components/organisms/PostOverview";
import TextInputBox from "components/molecules/TextInputBox";
import { NormalButton } from "components/atoms/Buttons";
import { firestore } from "utils/firebase/firebase.utils";

const CreatePost = props => {
    const { user, ...restProps } = props;
    const [isOnPreview, switchPreview] = useState(false);
    const [postInput, updatePostInput] = useState({
        title: "",
        overview: "",
        want: "",
        current: ""
    });

    const onChangeHandle = (e, target) => {
        e.preventDefault();
        updatePostInput({ ...postInput, [target]: e.target.value });
    };

    const onPreviewHandle = () => {
        switchPreview(!isOnPreview);
    };

    const onSubmitHandle = async e => {
        e.preventDefault();
        const { title, overview, want, current } = postInput;
        if (!title || !overview || !want || !current) {
            console.log(postInput);
            console.log("[create post] some field is empty ...");
            return;
        }

        const postsRef = firestore.collection("posts");
        const postedOn = new Date();

        try {
            await postsRef.add({
                ...postInput,
                postedOn,
                user
            });
        } catch (error) {
            console.log("error creating new post", error.message);
        }

        updatePostInput({
            title: "",
            overview: "",
            want: "",
            current: ""
        });
        switchPreview(false);
    };

    const inputItems = [
        {
            name: "概要",
            input: {
                placeholder: "概要を書いてください...",
                onChange: e => onChangeHandle(e, "overview"),
                value: postInput.overview
            },
            textarea: true
        },
        {
            name: "実現したいこと",
            input: {
                placeholder: "実現したいことを書いてください...",
                onChange: e => onChangeHandle(e, "want"),
                value: postInput.want
            },
            textarea: true
        },
        {
            name: "困っていること",
            input: {
                placeholder: "困っていることを書いてください...",
                onChange: e => onChangeHandle(e, "current"),
                value: postInput.current
            },
            textarea: true
        }
    ];

    return (
        <>
            {isOnPreview ? (
                <PageLayout user={user}>
                    <PageHeader>{postInput.title || "タイトル"}</PageHeader>
                    <PostOverview {...postInput} />
                    <StyledButtonWrapper>
                        <NormalButton size="small" onClick={onPreviewHandle}>
                            戻る
                        </NormalButton>
                        <NormalButton size="small" onClick={onSubmitHandle}>
                            投稿する
                        </NormalButton>
                    </StyledButtonWrapper>
                </PageLayout>
            ) : (
                <PageLayout user={user}>
                    <PageHeader>新規投稿</PageHeader>
                    <StyledDetailInputWrapper>
                        <TextInputBox
                            name="タイトル"
                            input={{
                                placeholder: "タイトルを入力してください...",
                                onChange: e => onChangeHandle(e, "title"),
                                value: postInput.title
                            }}
                        />
                        {map(inputItems, (item, i) => {
                            const { name, input, textarea } = item;
                            return (
                                <StyledDetailInput
                                    key={`input-detail_${i}`}
                                    name={name}
                                    input={input}
                                    textarea={textarea}
                                />
                            );
                        })}
                    </StyledDetailInputWrapper>
                    <StyledButtonWrapper>
                        <NormalButton size="small" onClick={onPreviewHandle}>
                            プレビュー
                        </NormalButton>
                        <NormalButton size="small" onClick={onSubmitHandle}>
                            投稿する
                        </NormalButton>
                    </StyledButtonWrapper>
                </PageLayout>
            )}
        </>
    );
};

export default CreatePost;

const StyledDetailInputWrapper = styled.div`
    && {
    }
`;

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
