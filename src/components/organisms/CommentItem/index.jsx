import React from "react";
import styled from "styled-components";
import { get } from "lodash";
import { NormalBox } from "components/atoms/Box";
import ImageText from "components/molecules/ImageText";

const CommentItem = props => {
    const { user, comment } = props;
    return (
        <StyledComment>
            <StyledCommentHeader>
                <ImageText
                    image={{ src: get(user, "src"), alt: get(user, "name") }}
                    size="medium"
                    type="round"
                >
                    {get(user, "name")}
                </ImageText>
                {/* TODO(aida) リアクションボタンを追加予定 */}
            </StyledCommentHeader>
            <StyledCommentMain>{comment}</StyledCommentMain>
            <StyledCommentFooter>
                {/* TODO(aida) リアクションカウントボタンを追加予定 */}
            </StyledCommentFooter>
        </StyledComment>
    );
};

export default CommentItem;

const StyledComment = styled(NormalBox)`
    && {
        padding: 1rem;
    }
`;

const StyledCommentHeader = styled.div`
    && {
    }
`;

const StyledCommentMain = styled.div`
    && {
        padding: 1rem 2rem;
        font-size: 1.6rem;
    }
`;
const StyledCommentFooter = styled.div`
    && {
    }
`;
