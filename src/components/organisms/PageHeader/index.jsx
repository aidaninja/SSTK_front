import React from "react";
import styled from "styled-components";
import { NormalBox } from "components/atoms/Box";

const PageHeader = props => {
    const { children } = props;
    return (
        <StyledNormalBox>
            <h1>{children}</h1>
        </StyledNormalBox>
    );
};

export default PageHeader;

const StyledNormalBox = styled(NormalBox)`
    && {
        font-size: 2.4rem;
        font-weight: bold;
        padding: 2rem 1.6rem;
    }
`;
