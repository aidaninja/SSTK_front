import React from "react";
import { storiesOf } from "@storybook/react";
import TextInputBox from ".";

const mockProps = {
    name: "",
    input: {
        placeholder: "文字を入力..."
    },
    textarea: false
};

storiesOf("molecules/TextInputBox", module)
    .add("default", () => {
        return <TextInputBox {...mockProps} />;
    })
    .add("label", () => {
        return <TextInputBox name="コード" />;
    })
    .add("textarea", () => {
        return <TextInputBox {...mockProps} textarea={true} />;
    });
