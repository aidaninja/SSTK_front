import React from "react";
import styled from "styled-components";
import { get } from "lodash";
import { NormalBox } from "components/atoms/Box";
import { RoundImage } from "components/atoms/Imgs";
import { AlertButton } from "components/atoms/Buttons";

const ProfileBox = props => {
    const { user, onEditProfile, isOwner, ...restProps } = props;
    return (
        <StyledProfileBox>
            <StyledProfileImage border="medium" src={get(user, "photoURL")} />
            <StyledUser>
                <StyledUserName>{get(user, "displayName")}</StyledUserName>
                {isOwner ? (
                    <StyledEditButton size={"small"} onClick={onEditProfile}>
                        EDIT
                    </StyledEditButton>
                ) : null}
                <StyledUserDetail>{get(user, "intro")}</StyledUserDetail>
            </StyledUser>
        </StyledProfileBox>
    );
};

export default ProfileBox;

const StyledProfileBox = styled(NormalBox)`
    && {
        max-height: 24rem;
        padding: 2rem 4rem;
        display: flex;
    }
`;

const StyledProfileImage = styled(RoundImage)`
    && {
        max-width: none;
        max-height: none;
        min-width: 14rem;
        min-height: 14rem;
    }
`;

const StyledUser = styled.div`
    && {
        margin-left: 6rem;
        display: flex;
        flex-direction: column;
    }
`;

const StyledUserName = styled.h1`
    && {
        font-size: 5.2rem;
        font-weight: bold;
    }
`;

const StyledEditButton = styled(AlertButton)`
    && {
        margin-top: auto;
        width: 10rem;
        font-weight: bold;
    }
`;

const StyledUserDetail = styled.p`
    && {
        margin-top: auto;
        font-size: 1.6rem;
    }
`;
