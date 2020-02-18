import React from "react";
import styled from "styled-components";
import { NormalButton } from "components/atoms/Buttons";
import TextInputBox from "components/molecules/TextInputBox";

const CommentInput = props => {
    const { onClick, input, ...options } = props;
    return (
        <StyledCommentInput {...options}>
            <TextInputBox input={input} textarea={true} />
            <StyledCommentButton size="small" onClick={onClick}>
                コメント
            </StyledCommentButton>
        </StyledCommentInput>
    );
};

export default CommentInput;

const StyledCommentInput = styled.div`
    && {
    }
`;

const StyledCommentButton = styled(NormalButton)`
    && {
        display: block;
        margin: 2rem 1rem 0 auto;
    }
`;
