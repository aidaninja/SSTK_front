import React from "react";
import styled from "styled-components";

const TextInput = props => {
    const { placeholder, onChange, defaultValue = "", type = "input" } = props;

    let Component;
    switch (type) {
        case "input":
            Component = StyledTextInput;
            break;
        case "textarea":
            Component = StyledTextarea;
            break;
        default:
    }

    return (
        <StyledTextInputBlock>
            <Component
                onChange={onChange}
                placeholder={placeholder}
                defaultValue={defaultValue}
            />
        </StyledTextInputBlock>
    );
};

const textInputGen = options => {
    return props => <TextInput {...props} {...options} />;
};

export const TextInputBlock = textInputGen({ type: "input" });
export const TextAreaBlock = textInputGen({ type: "textarea" });

export default TextInput;

const StyledTextInput = styled.input`
    && {
        width: 100%;
        display: inline-block;
        padding: 1rem;
        outline: none;
        border: none;
        font-size: inherit;
        color: inherit;
        height: 100%;
    }
`;

const StyledTextarea = styled.textarea`
    && {
        width: 100%;
        display: inline-block;
        padding: 1rem;
        outline: none;
        border: none;
        font-size: inherit;
        color: inherit;
        height: 100%;
        resize: none;
    }
`;
const StyledTextInputBlock = styled.div`
    && {
        font-size: 1.2rem;
        color: #444;
        height: 100%;
    }
`;
