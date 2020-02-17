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
        display: inline-block;
    }
`;

const StyledTextarea = styled.textarea`
    && {
        display: inline-block;
    }
`;
const StyledTextInputBlock = styled.div`
    && {
    }
`;
