import React from "react";
import styled, { css } from "styled-components";

const Img = props => {
    const { src = "", alt = "", style, ...restProps } = props;
    return <StyledImg src={src} alt={alt} style={style} {...restProps} />;
};

const imageGen = options => {
    return props => <Img {...props} {...options} />;
};

export const Image = imageGen();
export const RoundImage = imageGen({
    shape: "round"
});
export const RoundBorderImage = imageGen({
    shape: "round",
    border: "medium"
});

const imageSizePicker = props => {
    switch (props.size) {
        case "small":
            return css`
                width: 1.5rem;
                height: 1.5rem;
            `;
        case "medium":
            return css`
                width: 2.5rem;
                height: 2.5rem;
            `;
        case "large":
            return css`
                width: 3.5rem;
                height: 3.5rem;
            `;
        default:
    }
};

const imageShapePicker = props => {
    switch (props.shape) {
        case "round":
            return css`
                border-radius: 50%;
            `;
        default:
    }
};

const imageBorderPicker = props => {
    switch (props.border) {
        case "small":
            return css`
                border: 0.1rem solid #efefef;
            `;
        case "medium":
            return css`
                border: 0.3rem solid #efefef;
            `;
        default:
    }
};

const StyledImg = styled.img`
    && {
        min-width: 1rem;
        min-height: 1rem;
        max-width: 5rem;
        max-height: 5rem;
        object-fit: cover;
        ${props => imageSizePicker(props)}
        ${props => imageShapePicker(props)}
        ${props => imageBorderPicker(props)}
    }
`;
