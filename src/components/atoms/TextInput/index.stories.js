import React from "react";
import { storiesOf } from "@storybook/react";
import { TextInputBlock, TextAreaBlock } from ".";

const mockProps = {
    placeholder: "文字を入力...",
    defaultValue: ""
};

storiesOf("atom/TextInputBlock", module)
    .add("InputField", () => {
        return <TextInputBlock {...mockProps} />;
    })
    .add("TextAreaBlock", () => {
        return <TextAreaBlock {...mockProps} />;
    });
