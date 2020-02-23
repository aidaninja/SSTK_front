import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const LnkBase = props => {
    const { children, ...options } = props;

    return <StyledLink {...options}>{children}</StyledLink>;
};

const linkGen = options => {
    return props => <LnkBase {...props} {...options} />;
};

export const Lnk = linkGen();

const activeStyle = props => {
    if (!props.selected) return;
    return css`
        && {
            color: #3722d3;
            font-weight: bold;
            border-bottom: 0.1rem solid #3722d3;
        }
    `;
};
const StyledLink = styled(Link)`
    && {
        color: #042333;
        text-decoration: none;
        ${props => activeStyle(props)}
    }
`;
