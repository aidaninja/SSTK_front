import React from "react";
import styled, { css } from "styled-components";

const Box = props => {
    const { size = "medium", theme, children } = props;
    return (
        <StyledBox size={size} theme={theme} {...props}>
            {children}
        </StyledBox>
    );
};

const boxGen = options => {
    return props => <Box {...props} {...options} />;
};

export const NormalBox = boxGen({ theme: "default" });

const themePicker = props => {
    switch (props.theme) {
        case "default":
            return css`
                /* background: #2d2742; */
                background: #1e364d;
                /* background: #0e2339; */
                border-color: #1e364d;
            `;
        default:
    }
};

const sizePicker = props => {
    switch (props.size) {
        case "small":
            return css`
                border-width: 0.1rem;
            `;
        case "medium":
            return css`
                border-width: 0.3rem;
            `;
        case "large":
            return css`
                border-width: 0.5rem;
            `;
        default:
    }
};

const StyledBox = styled.div`
    && {
        /* box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2),
            0 0.6rem 0.6rem rgba(0, 0, 0, 0.24); */
        border: 0.3rem solid;
        border-radius: 0.5rem;
        overflow: hidden;
        ${props => sizePicker(props)}
        ${props => themePicker(props)}
    }
`;
