import React from "react";
import styled from "styled-components";
import { map } from "lodash";
import CommentItem from "components/organisms/CommentItem";

const CommentItemList = props => {
    const { commentItems } = props;
    return (
        <StyledCommentItemList>
            {map(commentItems, ({ id, ...commentItem }, i) => (
                <li key={`comment_${id}-${i}`}>
                    <CommentItem {...commentItem} />
                </li>
            ))}
        </StyledCommentItemList>
    );
};

export default CommentItemList;

const StyledCommentItemList = styled.ul`
    && {
        li {
            :not(:first-child) {
                margin-top: 1rem;
            }
        }
    }
`;
