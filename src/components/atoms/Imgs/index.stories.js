import React from "react";
import { storiesOf } from "@storybook/react";
import { Image, RoundImage, RoundBorderImage } from ".";

const imageSource =
    "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png";

storiesOf("atom/Image", module)
    .add("default", () => <Image src={imageSource} />)
    .add("Round", () => <RoundImage src={imageSource} />)
    .add("Round border", () => <RoundBorderImage src={imageSource} />);
