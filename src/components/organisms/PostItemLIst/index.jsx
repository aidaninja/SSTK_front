import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { map } from "lodash";
import PostItem from "components/organisms/PostItem";

const PostItemList = props => {
    const { postItems } = props;

    return (
        <StyledPostItemList>
            {map(postItems, ({ id, ...postItem }, i) => {
                return (
                    <li key={`post_${id}-${i}`}>
                        <Link to={`/post/${id}`}>
                            <PostItem {...postItem} />
                        </Link>
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
            a {
                text-decoration: none;
                color: #ececec;
            }
        }
    }
`;
