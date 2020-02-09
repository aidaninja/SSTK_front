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
                background: #fff;
                border-color: #3722d3;
            `;
        default:
    }
};

const sizePicker = props => {
    switch (props.size) {
        case "small":
            return css`
                border-width: 0.3rem;
            `;
        case "medium":
            return css`
                border-width: 0.4rem;
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
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19),
            0 0.6rem 0.6rem rgba(0, 0, 0, 0.23);
        padding: 3rem;
        border: 0.3rem solid;
        border-radius: 0.5rem;
        ${props => sizePicker(props)}
        ${props => themePicker(props)}
    }
`;
