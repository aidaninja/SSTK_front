import React from "react";
import { storiesOf } from "@storybook/react";
import MessageBox from ".";

storiesOf("organisms/MessageBox", module).add("MessageBox", () => {
    const mockProps = {
        title: "",
        message: "投稿がありません",
        buttonText: "投稿を作成する"
    };
    return <MessageBox {...mockProps} />;
});
