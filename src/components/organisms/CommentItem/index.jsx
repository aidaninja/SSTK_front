import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { get } from "lodash";
import { NormalBox } from "components/atoms/Box";
import ImageText from "components/molecules/ImageText";

const CommentItem = props => {
    const { user, comment } = props;
    return (
        <StyledComment>
            <StyledCommentHeader>
                {/* TODO(aida) クリックしたときにプロフィールに遷移するようにする */}
                <Link to={`/profile/${get(user, "id")}`}>
                    <ImageText
                        image={{
                            src: get(user, "photoURL"),
                            alt: get(user, "displayName")
                        }}
                        size="medium"
                        type="round"
                    >
                        {get(user, "displayName")}
                    </ImageText>
                </Link>
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
        a {
            display: inline-block;
        }
    }
`;

const StyledCommentMain = styled.div`
    && {
        padding: 1rem 2rem;
        font-size: 1.6rem;
        white-space: pre-wrap;
    }
`;
const StyledCommentFooter = styled.div`
    && {
    }
`;
