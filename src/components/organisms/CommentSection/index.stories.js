import React from "react";
import { storiesOf } from "@storybook/react";
import CommentSection from ".";

const mockProps = {
    inputProps: {
        input: {
            placeholder: "コメントを入力..."
        }
    },
    commentItems: [
        {
            id: 0,
            user: {
                displayName: "Yuki Inoue",
                src:
                    "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png"
            },
            comment:
                "floatじゃなくてdisplay: flexを使えばもっと簡単にできるよ。"
        },
        {
            id: 0,
            user: {
                displayName: "Jun Aida",
                src:
                    "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png"
            },
            comment: "なるほどね！ありがとうございます！"
        }
    ]
};

storiesOf("organisms/CommentSection", module).add("CommentSection", () => {
    return <CommentSection {...mockProps} />;
});
