import React from "react";
import styled from "styled-components";
import { map } from "lodash";
import { NormalBox } from "components/atoms/Box";
import TextContent from "components/molecules/TextContent";

const TextContentBox = props => {
    const { contents, ...options } = props;
    return (
        <StyledTextContentBox {...options}>
            {map(contents, (content, i) => {
                const { name = "", text, ...textProps } = content;
                return (
                    <StyledTextContentWrapper key={`text-content_${i}`}>
                        <TextContent name={name} {...textProps}>
                            {text}
                        </TextContent>
                    </StyledTextContentWrapper>
                );
            })}
        </StyledTextContentBox>
    );
};

export default TextContentBox;

const StyledTextContentBox = styled(NormalBox)`
    && {
        padding: 1rem;
    }
`;

const StyledTextContentWrapper = styled.div`
    && {
        :not(:first-child) {
            margin-top: 2rem;
        }
    }
`;
