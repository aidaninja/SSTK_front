import React from "react";
import styled from "styled-components";
import { NormalBox } from "components/atoms/Box";
import { NormalButton } from "components/atoms/Buttons";

const MessageBox = props => {
    const {
        title,
        message,
        onClick,
        buttonText,
        isVisibleButton,
        ...restProps
    } = props;

    return (
        <StyledMessageBoxWrapper {...restProps}>
            {title ? <StyledMessageHeader>{title}</StyledMessageHeader> : null}
            <StyledMessage>{message}</StyledMessage>
            {isVisibleButton ? (
                <StyledMessageFooter>
                    <NormalButton onClick={onClick} size="small">
                        {buttonText}
                    </NormalButton>
                </StyledMessageFooter>
            ) : null}
        </StyledMessageBoxWrapper>
    );
};

export default MessageBox;

const StyledMessageBoxWrapper = styled(NormalBox)`
    && {
        padding: 2rem 3rem;
    }
`;

const StyledMessageHeader = styled.p`
    && {
        text-align: center;
        font-size: 1.8rem;
    }
`;

const StyledMessage = styled.p`
    && {
        text-align: center;
        font-size: 2.4rem;
        :not(:first-child) {
            margin-top: 2rem;
        }
    }
`;

const StyledMessageFooter = styled.div`
    && {
        margin-top: 2rem;
        text-align: center;
    }
`;
