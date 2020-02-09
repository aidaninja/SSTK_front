import React from "react";
import styled, { css } from "styled-components";

const Tag = props => {
    const { theme = "default", children } = props;
    return <StyledTag theme={theme}>{children}</StyledTag>;
};

const tagGen = options => {
    return props => <Tag {...props} {...options} />;
};

export const NormalTag = tagGen({ theme: "default" });

const themePicker = props => {
    switch (props.theme) {
        case "default":
            return css`
                background: #3722d3;
                color: #ffffff;
            `;
        default:
    }
};

const StyledTag = styled.span`
    border-radius: 0.5rem;
    display: inline-block;
    padding: 0.4rem;
    text-align: center;
    min-width: 4rem;
    min-height: 2rem;
    ${props => themePicker(props)}
`;
