import React from "react";
import { storiesOf } from "@storybook/react";
import ImageText from ".";

const mockProps = {
    image: {
        src:
            "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png",
        alt: "emoji"
    },
    type: ""
};

storiesOf("molecules/ImageText/type", module)
    .add("default", () => <ImageText {...mockProps}>SSTK</ImageText>)
    .add("round", () => (
        <ImageText {...mockProps} type="round">
            SSTK
        </ImageText>
    ))
    .add("border", () => (
        <ImageText {...mockProps} type="border">
            SSTK
        </ImageText>
    ));

storiesOf("molecules/ImageText/size", module)
    .add("small", () => (
        <ImageText {...mockProps} size="small">
            SSTK
        </ImageText>
    ))
    .add("medium", () => <ImageText {...mockProps}>SSTK</ImageText>)
    .add("large", () => (
        <ImageText {...mockProps} size="large">
            SSTK
        </ImageText>
    ));
