import React from "react";
import styled from "styled-components";

const TopLayout = props => {
    const { children } = props;
    return (
        <StyledWrapper>
            <StyledHeader>精神と時の部屋α</StyledHeader>
            {children}
        </StyledWrapper>
    );
};

export default TopLayout;

const StyledWrapper = styled.div`
    && {
    }
`;

const StyledHeader = styled.h1`
    && {
        font-family: "logo";
        letter-spacing: 0.8rem;
        text-align: center;
        font-size: 4.2rem;
        margin-top: 8rem;
    }
`;
