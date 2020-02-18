import React from "react";
import styled from "styled-components";
import CommentItemList from "components/organisms/CommentItemList";
import CommentInput from "components/organisms/CommentInput";

const CommentSection = props => {
    const { inputProps, commentItems, ...options } = props;
    return (
        <StyledCommentSection {...options}>
            <CommentItemList commentItems={commentItems} />
            <CommentInput {...inputProps} />
        </StyledCommentSection>
    );
};

export default CommentSection;

const StyledCommentSection = styled.div`
    && {
        & > div:last-child {
            margin-top: 1.6rem;
        }
    }
`;
