import React from "react";
import styled from "styled-components";
import PageHeader from "components/organisms/PageHeader";
import { Link } from "react-router-dom";

const TermsLayout = props => {
    const { title, children } = props;

    return (
        <StyledTermsWrapper>
            <PageHeader>{title}</PageHeader>
            <StyledTermsContainer>{children}</StyledTermsContainer>
            <StyledLinkWrapper>
                <StyledLink to="/signup">＜サインアップに戻る</StyledLink>
                <StyledLink to="/">＜ログインに戻る</StyledLink>
            </StyledLinkWrapper>
        </StyledTermsWrapper>
    );
};

export default TermsLayout;

const StyledTermsWrapper = styled.div`
    && {
        max-width: 90rem;
        padding: 3rem 0;
        margin: 0 auto;
    }
`;

const StyledTermsContainer = styled.div`
    && {
        margin-top: 3rem;
    }
`;

const StyledLinkWrapper = styled.div`
    && {
    }
`;

const StyledLink = styled(Link)`
    && {
        font-size: 1.4rem;
        :not(:first-child) {
            margin-top: 1rem;
        }
    }
`;
