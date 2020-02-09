import React from "react";
import styled from "styled-components";

const Img = props => {
    const { src = "", alt = "", style } = props;
    return <StyledImg src={src} alt={alt} style={style} {...props} />;
};

const imageGen = options => {
    return props => <Img {...props} {...options} />;
};

export const Image = imageGen();

const StyledImg = styled.img`
    && {
        min-width: 1rem;
        min-height: 1rem;
        max-width: 5rem;
        max-height: 5rem;
        object-fit: cover;
    }
`;
