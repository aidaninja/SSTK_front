import React from "react";
import styled, { css } from "styled-components";

const Input = props => {
    const {
        type = "text",
        label,
        onChange,
        placeholder,
        size = "large"
    } = props;
    return (
        <StyledInputWrapper>
            <StyledLabel size={size}>{label}</StyledLabel>
            <StyledInput
                type={type}
                onChange={onChange}
                placeholder={placeholder ? placeholder : null}
                size={size}
                {...props}
            />
        </StyledInputWrapper>
    );
};

const inputGen = options => {
    return props => <Input {...props} {...options} />;
};

export const NormalInput = inputGen({ type: "text" });
export const PasswordInput = inputGen({ type: "password" });

const sizePicker = props => {
    switch (props.size) {
        case "small":
            return css`
                font-size: 1.2rem;
            `;
        case "medium":
            return css`
                font-size: 1.4rem;
            `;
        case "large":
            return css`
                font-size: 1.6rem;
            `;
        default:
    }
};

const StyledInputWrapper = styled.div`
    && {
    }
`;

const StyledLabel = styled.label`
    && {
        display: block;
        ${props => sizePicker(props)}
    }
`;

const StyledInput = styled.input`
    && {
        display: block;
        width: 100%;
        background: #ebebeb;
        border: none;
        padding: 0.5rem;
        border-radius: 0.5rem;
        outline: none;
        ${props => sizePicker(props)}
    }
`;

export default Input;
