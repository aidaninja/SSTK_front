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
                    <StyledPageNavigationContainer>
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
                    </StyledPageNavigationContainer>
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
        position: relative;
        button {
            width: 100%;
            margin-top: 1rem;
            /* MEMO(aida) max-widthは必要に応じて調整　*/
            max-width: 16rem;
        }
    }
`;

const StyledPageNavigationContainer = styled.div`
    && {
        position: sticky;
        top: 1rem;
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
