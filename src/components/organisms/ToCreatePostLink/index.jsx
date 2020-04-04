import React from "react";
import styled from "styled-components";
import { get } from "lodash";
import { Link } from "react-router-dom";
import icon from "img/icon";

const ToCreatePostLink = () => {
    return <StyledLink to="/post" />;
};

export default ToCreatePostLink;

const StyledLink = styled(Link)`
    && {
        min-width: 5rem;
        min-height: 5rem;
        position: fixed;
        right: 10%;
        bottom: 10%;
        display: inline-block;
        border-radius: 100%;
        color: #ffffff;
        background-color: #4799eb;
        background-image: url(${get(icon, "dark.create")});
        background-position: center;
        background-size: 3rem 3rem;
        background-repeat: no-repeat;
        cursor: pointer;
        transition: opacity ease 0.2s;
        &:hover {
            opacity: 0.8;
        }
    }
`;
