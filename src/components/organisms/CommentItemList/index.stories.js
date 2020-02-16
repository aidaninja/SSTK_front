import React from "react";
import { storiesOf } from "@storybook/react";
import CommentItemList from ".";

const mockProps = {
    commentItems: [
        {
            id: 0,
            user: {
                name: "Yuki Inoue",
                src:
                    "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png"
            },
            comment:
                "floatじゃなくてdisplay: flexを使えばもっと簡単にできるよ。"
        },
        {
            id: 0,
            user: {
                name: "Jun Aida",
                src:
                    "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png"
            },
            comment: "なるほどね！ありがとうございます！"
        }
    ]
};

storiesOf("organisms/CommentItemList", module).add("CommentItemList", () => {
    return <CommentItemList {...mockProps} />;
});
