import React, { useState } from "react";
import styled from "styled-components";
import { map } from "lodash";
import PageLayout from "components/templates/PageLayout";
import PageHeader from "components/organisms/PageHeader";
import TextInputBox from "components/molecules/TextInputBox";
import { NormalButton } from "components/atoms/Buttons";

const Post = props => {
    const { user, ...restProps } = props;
    const [postInput, updatePostInput] = useState(null);

    const inputItems = [
        {
            name: "概要",
            input: { placeholder: "概要を書いてください..." },
            textarea: true
        },
        {
            name: "実現したいこと",
            input: { placeholder: "実現したいことを書いてください..." },
            textarea: true
        },
        {
            name: "困っていること",
            input: { placeholder: "困っていることを書いてください..." },
            textarea: true
        }
    ];

    return (
        <>
            <PageLayout user={user}>
                <PageHeader>新規投稿</PageHeader>
                <StyledDetailInputWrapper>
                    <TextInputBox
                        name="タイトル"
                        input={{ placeholder: "タイトルを入力してください..." }}
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
                    <NormalButton>プレビュー</NormalButton>
                    <NormalButton>投稿する</NormalButton>
                </StyledButtonWrapper>
            </PageLayout>
        </>
    );
};

export default Post;

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
