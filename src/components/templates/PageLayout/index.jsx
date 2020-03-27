import React from "react";
import styled from "styled-components";
import GlobalNavigation from "components/organisms/GlobalNavigation";
import { auth } from "utils/firebase/firebase.utils";
import { NormalButton } from "components/atoms/Buttons";

const PageLayout = props => {
    const { user, children } = props;

    return (
        <>
            <StyledPageLayout>
                <StyledPageNavigation>
                    <GlobalNavigation user={user} />
                    {!!user && (
                        <NormalButton
                            onClick={() => {
                                auth.signOut();
                            }}
                            size="small"
                        >
                            ログアウト
                        </NormalButton>
                    )}
                </StyledPageNavigation>
                <StyledPageContent>{children}</StyledPageContent>
            </StyledPageLayout>
        </>
    );
};

export default PageLayout;

const StyledPageLayout = styled.div`
    && {
        display: flex;
        max-width: 98rem;
        margin: 0 auto;
        padding: 2rem 0;
    }
`;

const StyledPageNavigation = styled.div`
    && {
        min-width: 18rem;
        padding-top: 1rem;
        button {
            margin-top: 1rem;
            margin-left: 3rem;
        }
    }
`;

const StyledPageContent = styled.div`
    && {
        width: 100%;
        > *:not(:first-child) {
            margin-top: 3rem;
        }
    }
`;
