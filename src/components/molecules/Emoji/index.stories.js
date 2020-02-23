import React from "react";
import { storiesOf } from "@storybook/react";
import Emoji from ".";

// TODO(aida) emoji,size用のknobsを追加

storiesOf("molecules/Emoji", module).add("Emoji", () => {
    const mockProps = {
        name: "fire",
        size: "" //string(small, medium, large) or number(1 ~ 100)
        // style: {}
    };
    return <Emoji {...mockProps} />;
});
