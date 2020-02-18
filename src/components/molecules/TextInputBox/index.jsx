import React from "react";
import styled from "styled-components";
import { NormalBox } from "components/atoms/Box";
import { TextInputBlock, TextAreaBlock } from "components/atoms/TextInput";

const TextInputBox = props => {
    const { name = "", input, textarea = false, ...options } = props;
    return (
        <TextInputBoxWrapper {...options}>
            {name && <StyledLabel>{name}</StyledLabel>}
            {textarea ? (
                <TextAreaBlock {...input} />
            ) : (
                <TextInputBlock {...input} />
            )}
        </TextInputBoxWrapper>
    );
};

const TextInputBoxWrapper = styled(NormalBox)`
    && {
        padding: 0.8rem;
        display: flex;
        flex-direction: column;
    }
`;

const StyledLabel = styled.p`
    && {
        font-size: 1.2rem;
        font-weight: bold;
    }
`;

export default TextInputBox;
