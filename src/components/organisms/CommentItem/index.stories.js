import React from "react";
import { storiesOf } from "@storybook/react";
import CommentItem from ".";

const mockProps = {
    user: {
        name: "Jun Aida",
        photoURL:
            "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png"
    },
    comment: "floatじゃなくてdisplay: flexを使えばもっと簡単にできるよ。"
};

storiesOf("organisms/CommentItem", module).add("CommentItem", () => {
    return <CommentItem {...mockProps} />;
});
