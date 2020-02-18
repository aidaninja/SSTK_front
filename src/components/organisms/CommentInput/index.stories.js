import React from "react";
import { storiesOf } from "@storybook/react";
import CommentInput from ".";

const mockProps = {
    input: {
        placeholder: "コメントを入力..."
    }
};

storiesOf("organisms/CommentIntput", module).add("CommentInput", () => {
    return <CommentInput {...mockProps} />;
});
