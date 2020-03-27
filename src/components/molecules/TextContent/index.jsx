import React from "react";
import styled from "styled-components";

const TextContent = props => {
    const { name, children, ...options } = props;
    return (
        <StyledTextContent {...options}>
            {name && <StyledHeader>{name}</StyledHeader>}
            <StyledText>{children}</StyledText>
        </StyledTextContent>
    );
};

export default TextContent;

const StyledTextContent = styled.div`
    && {
        width: 100%;
    }
`;

const StyledHeader = styled.p`
    && {
        margin-top: 1rem;
        font-size: 1.8rem;
        font-weight: 500;
    }
`;

const StyledText = styled.p`
    && {
        margin-top: 1rem;
        font-size: 1.4rem;
        line-height: 1.8;
        white-space: pre-wrap;
    }
`;
