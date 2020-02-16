import React from "react";
import styled from "styled-components";
import { map } from "lodash";
import PostItem from "components/organisms/PostItem";

const PostItemList = props => {
    const { postItems } = props;

    return (
        <StyledPostItemList>
            {/* TODO(aida) Linkでwrap */}
            {map(postItems, ({ id, ...postItem }) => {
                console.log(id, postItem);
                return (
                    <li key={`post_${id}`}>
                        <PostItem {...postItem} />
                    </li>
                );
            })}
        </StyledPostItemList>
    );
};

export default PostItemList;

const StyledPostItemList = styled.ul`
    && {
        li {
            cursor: pointer;
            :not(:first-child) {
                margin-top: 2rem;
            }
        }
    }
`;
