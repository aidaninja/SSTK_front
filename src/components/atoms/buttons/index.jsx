import React from "react";
import styled, { css } from "styled-components";
import googleButton from "img/button/signin_google.png";

const Button = props => {
    const {
        children,
        size = "medium",
        onClick,
        color = "default",
        styles
    } = props;
    return (
        <StyledButton
            style={{ ...styles }}
            onClick={onClick}
            size={size}
            color={color}
            {...props}
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
                background: #4799eb;
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
        border: none;
        transition: opacity ease 0.2s;
        :hover {
            opacity: 0.8;
        }
        ${props => sizePicker(props)}
        ${props => colorPicker(props)}
    }
`;

const StyledGoogleButton = styled(NormalButton)`
    && {
        background: none;
        padding: 0;
        min-height: 3.4rem;
        background-image: url(${googleButton});
        background-size: cover;
        border: none;
        min-width: 14rem;
    }
`;
export const GoogleSignInButton = StyledGoogleButton;

export default Button;
