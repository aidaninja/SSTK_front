import React from "react";
import styled from "styled-components";
import { map, get } from "lodash";
import { NormalBox } from "components/atoms/Box";
import { NormalTag } from "components/atoms/Tags";
import ImageText from "components/molecules/ImageText";
const PostItem = props => {
    const { tags, title, user, postedOn, status } = props;
    const postedDate = new Date(postedOn.seconds * 1000);
    return (
        <StyledNormalBox>
            <div>
                <StyledPostHeader>
                    posted {postedDate.toLocaleDateString("en-US")}
                </StyledPostHeader>
                <StyledPostTitle>{title}</StyledPostTitle>
                <StyledPostFooter>
                    <ImageText
                        image={{
                            src: get(user, "src"),
                            alt: get(user, "displayName")
                        }}
                        size="medium"
                        type="round"
                    >
                        {get(user, "displayName")}
                    </ImageText>
                    <StyledTags>
                        {map(tags, ({ name }, i) => (
                            <StyledTagWrapper key={`tags_${name}-${i}`}>
                                <NormalTag>{name}</NormalTag>
                            </StyledTagWrapper>
                        ))}
                    </StyledTags>
                </StyledPostFooter>
            </div>
            <StyledStatus>{status}</StyledStatus>
        </StyledNormalBox>
    );
};

export default PostItem;

const StyledNormalBox = styled(NormalBox)`
    && {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }
`;

const StyledStatus = styled.div`
    && {
        font-size: 5rem;
    }
`;
const StyledPostHeader = styled.div`
    && {
    }
`;
const StyledPostTitle = styled.p`
    && {
        margin-top: 0.2rem;
        padding: 0.8rem;
        font-size: 2rem;
        font-weight: bold;
    }
`;

const StyledPostFooter = styled.div`
    && {
        margin-top: 0.2rem;
        display: flex;
        align-items: center;
    }
`;

const StyledTags = styled.div`
    && {
        margin-left: 1.4rem;
    }
`;

const StyledTagWrapper = styled.span`
    && {
        display: inline-block;
        &:not(:first-child) {
            margin-left: 0.5rem;
        }
    }
`;
