import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = props => {
    const { style, ...restProps } = props;
    return (
        <StyledLoaderWrapper style={style} {...restProps}>
            <StyledLoaderContainer>
                <div></div>
                <div></div>
                <div></div>
            </StyledLoaderContainer>
        </StyledLoaderWrapper>
    );
};

export default Loader;

export const CenteredLoader = styled(Loader)`
    && {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 30rem;
    }
`;

const loaderAnimation = keyframes`
    0% {
        top: 8px;
        height: 64px;
    }
    50%, 100% {
        top: 24px;
        height: 32px;
    }
`;

const StyledLoaderWrapper = styled.div`
    && {
    }
`;

const StyledLoaderContainer = styled.div`
    && {
        position: relative;
        width: 80px;
        height: 80px;
        div {
            position: absolute;
            width: 16px;
            height: 100%;
            background-color: #ececec;
            animation: ${loaderAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1)
                infinite;
            :nth-child(1) {
                left: 8px;
                animation-delay: -0.24s;
            }
            :nth-child(2) {
                left: 32px;
                animation-delay: -0.12s;
            }
            :nth-child(3) {
                left: 56px;
                animation-delay: 0;
            }
        }
    }
`;
