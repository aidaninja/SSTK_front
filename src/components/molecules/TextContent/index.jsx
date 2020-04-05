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
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        max-width: 12rem;
        font-size: 1.4rem;
        border-bottom: 0.2rem solid #0e2339;
        display: inline-block;
    }
`;

const StyledText = styled.p`
    && {
        margin-top: 1rem;
        font-size: 1.6rem;
        line-height: 1.8;
        white-space: pre-wrap;
    }
`;
