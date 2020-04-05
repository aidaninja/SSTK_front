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
            <StyledDoneText>以上</StyledDoneText>
            <StyledLinkWrapper>
                <div>
                    <StyledLink to="/signup">＜サインアップに戻る</StyledLink>
                </div>
                <div>
                    <StyledLink to="/">＜ログインに戻る</StyledLink>
                </div>
            </StyledLinkWrapper>
        </StyledTermsWrapper>
    );
};

export default TermsLayout;

const StyledTermsWrapper = styled.div`
    && {
        max-width: 90rem;
        padding: 3rem 1rem;
        margin: 0 auto;
    }
`;

const StyledTermsContainer = styled.div`
    && {
        margin-top: 3rem;
    }
`;

const StyledDoneText = styled.p`
    && {
        margin-top: 1rem;
        text-align: right;
        font-size: 1.4rem;
    }
`;

const StyledLinkWrapper = styled.div`
    && {
        margin-top: 1rem;
        div:not(:first-child) {
            margin-top: 1rem;
        }
    }
`;

const StyledLink = styled(Link)`
    && {
        display: inline-block;
        font-size: 1.4rem;
    }
`;
