import React from "react";
import { storiesOf } from "@storybook/react";
import TextContentBox from ".";

storiesOf("organisms/TextContentBox", module).add("TextContentBox", () => {
    const mockProps = {
        contents: [
            { name: "概要", text: "中央寄せができないよー" },
            { name: "実現したいこと", text: "中央寄せができないよー" },
            { name: "困っていること", text: "中央寄せができないよー" }
        ]
    };
    return <TextContentBox {...mockProps} />;
});
