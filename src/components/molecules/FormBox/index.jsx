import React from "react";
import styled from "styled-components";
import { map } from "lodash";

const FormBox = props => {
    const { inputs, buttons, Footer = null, name, ...options } = props;

    return (
        <StyledForm {...options}>
            {name ? <StyledFormName>{name}</StyledFormName> : null}
            <StyledFromInputWrapper>
                {map(inputs, (input, i) => (
                    <StyledFromInput key={`input_${i}`}>
                        {input}
                    </StyledFromInput>
                ))}
            </StyledFromInputWrapper>
            <StyledFormButtonWrapper>
                {map(buttons, (button, i) => (
                    <StyledFormButton key={`button_${i}`}>
                        {button}
                    </StyledFormButton>
                ))}
            </StyledFormButtonWrapper>
            {Footer ? (
                <StyledFooter>
                    <Footer />
                </StyledFooter>
            ) : null}
        </StyledForm>
    );
};

const StyledForm = styled.div`
    && {
        /* background: #2d2742; */
        background: #1e364d;
        padding: 4rem;
        /* box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2),
            0 0.6rem 0.6rem rgba(0, 0, 0, 0.24); */
        max-width: 38rem;
    }
`;
const StyledFormName = styled.p`
    && {
        text-align: center;
        font-size: 3.2rem;
        font-weight: 100;
    }
`;

const StyledFromInputWrapper = styled.div`
    && {
        :not(:first-child) {
            margin-top: 4rem;
        }
    }
`;

const StyledFromInput = styled.div`
    && {
        :not(:first-child) {
            margin-top: 2rem;
        }
    }
`;

const StyledFormButtonWrapper = styled.div`
    && {
        margin-top: 4rem;
        display: flex;
        justify-content: space-evenly;
    }
`;

const StyledFooter = styled.div`
    && {
        margin-top: 1.6rem;
    }
`;

const StyledFormButton = styled.div`
    && {
        display: inline-block;
    }
`;

export default FormBox;
