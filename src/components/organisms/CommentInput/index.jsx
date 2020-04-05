import React from "react";
import styled from "styled-components";
import { NormalButton } from "components/atoms/Buttons";
import TextInputBox from "components/molecules/TextInputBox";

const CommentInput = props => {
    const { onClick, input, isError } = props;
    return (
        <StyledCommentInput>
            <TextInputBox input={input} textarea={true} />
            <StyledButtonBlock>
                {isError && (
                    <StyledErrorText>
                        コメントが未入力です
                        <span role="img" aria-label="emoji">
                            😡
                        </span>
                    </StyledErrorText>
                )}
                <StyledCommentButton size="small" onClick={onClick}>
                    コメント
                </StyledCommentButton>
            </StyledButtonBlock>
        </StyledCommentInput>
    );
};

export default CommentInput;

const StyledCommentInput = styled.div`
    && {
    }
`;

const StyledButtonBlock = styled.div`
    && {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 2rem;
    }
`;

const StyledCommentButton = styled(NormalButton)`
    && {
        display: block;
        margin: 0 1rem 0 3rem;
    }
`;

const StyledErrorText = styled.p`
    && {
        font-size: 1.4rem;
        text-align: center;
        color: #ff9393;
    }
`;
