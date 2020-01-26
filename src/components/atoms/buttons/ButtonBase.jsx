import React from "react";
import styled, { css } from "styled-components";

const Button = props => {
    const {
        children,
        size = "medium",
        clickHandler,
        color = "default",
        styles
    } = props;
    return (
        <StyledButton
            style={{ ...styles }}
            onClick={clickHandler}
            size={size}
            color={color}
        >
            {children}
        </StyledButton>
    );
};

const buttonGen = options => {
    return props => <Button {...props} {...options} />;
};

export const NormalButton = buttonGen({ color: "default" });
export const AlertButton = buttonGen({ color: "alert" });
export const WarningButton = buttonGen({ color: "warning" });

const sizePicker = props => {
    switch (props.size) {
        case "small":
            return css`
                padding: 0.5rem 1rem;
                min-width: 10rem;
                font-size: 1.4rem;
            `;
        case "medium":
            return css`
                padding: 1rem 1.5rem;
                min-width: 12.5rem;
                font-size: 1.6rem;
            `;
        case "large":
            return css`
                padding: 1.5rem 2rem;
                min-width: 15rem;
                font-size: 1.8rem;
            `;
        default:
    }
};
const colorPicker = props => {
    switch (props.color) {
        case "default":
            return css`
                color: #fff;
                background: #3722d3;
            `;
        case "alert":
            return css`
                color: #fff;
                background: #ff3d00;
            `;
        case "warning":
            return css`
                color: #fff;
                background: #ff9900;
            `;
        default:
    }
};

const StyledButton = styled.button`
    && {
        appearance: none;
        cursor: pointer;
        border-radius: 0.5rem;
        ${props => sizePicker(props)}
        ${props => colorPicker(props)}
    }
`;

export default Button;
