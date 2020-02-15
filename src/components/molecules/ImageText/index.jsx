import React from "react";
import styled, { css } from "styled-components";
import { RoundImage, RoundBorderImage, Image } from "components/atoms/Imgs";

const ImageText = props => {
    const { children, image, type, size = "medium" } = props;
    let Img;
    switch (type) {
        case "round":
            Img = RoundImage;
            break;
        case "border":
            Img = RoundBorderImage;
            break;
        default:
            Img = Image;
    }

    return (
        <StyledImageText>
            <Img {...image} size={size} />
            <StyledText size={size}>{children}</StyledText>
        </StyledImageText>
    );
};

const textSizePicker = props => {
    switch (props.size) {
        case "small":
            return css`
                font-size: 1rem;
                margin-left: 0.5rem;
            `;
        case "medium":
            return css`
                font-size: 1.2rem;
                margin-left: 0.8rem;
            `;
        case "large":
            return css`
                font-size: 1.4rem;
                margin-left: 1rem;
            `;
        default:
    }
};

const StyledImageText = styled.div`
    && {
        display: flex;
        align-items: center;
    }
`;
const StyledText = styled.p`
    && {
        ${props => textSizePicker(props)}
    }
`;

export default ImageText;
