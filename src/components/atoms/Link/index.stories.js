import React from "react";
import { storiesOf } from "@storybook/react";
import { Lnk } from ".";

storiesOf("atom/Link", module)
    .add("default", () => {
        return <Lnk>Link</Lnk>;
    })
    .add("selected", () => {
        return <Lnk selected={true}>Link</Lnk>;
    });
