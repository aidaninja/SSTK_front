import React from "react";
import styled from "styled-components";
import CommentItemList from "components/organisms/CommentItemList";
import CommentInput from "components/organisms/CommentInput";

const CommentSection = props => {
    const { onSubmitComment, input, commentItems } = props;
    return (
        <StyledCommentSection>
            <CommentItemList commentItems={commentItems} />
            <CommentInput onClick={onSubmitComment} input={input} />
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
