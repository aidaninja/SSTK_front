import React from "react";
import styled, { css } from "styled-components";

const Input = props => {
    const { type = "text", label, onChange, placeholder } = props;
    return (
        <StyledInputWrapper>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput
                type={type}
                onChange={onChange}
                placeholder={placeholder ? placeholder : null}
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

const StyledInputWrapper = styled.div`
    && {
    }
`;

const StyledLabel = styled.label`
    && {
        display: block;
    }
`;

const StyledInput = styled.input`
    && {
        display: block;
        background: #ebebeb;
        border: none;
        padding: 0.5rem;
        border-radius: 0.5rem;
        outline: none;
    }
`;

export default Input;
