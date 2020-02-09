import React from "react";
import { storiesOf } from "@storybook/react";
import { Image } from "./ImageBase";

storiesOf("atom/Image", module).add("default", () => (
    <Image src="https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png" />
));
