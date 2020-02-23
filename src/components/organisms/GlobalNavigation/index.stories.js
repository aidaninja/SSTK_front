import React from "react";
import { storiesOf } from "@storybook/react";
import GlobalNavigation from ".";

storiesOf("organisms/GlobalNavigation", module).add("default", () => {
    return <GlobalNavigation />;
});
