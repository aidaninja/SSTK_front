import React from "react";
import { storiesOf } from "@storybook/react";
import PostItemList from ".";

const mockProps = {
    postItems: [
        {
            title: "Reactのアニメーション分からないよー",
            tags: [{ name: "React" }, { name: "CSS" }],
            postedOn: "02/17/2020",
            user: {
                name: "Jun Aida",
                src:
                    "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png"
            },
            status: "🔥",
            id: 1
        },
        {
            title: "Reduxの使い方がわかりません",
            tags: [{ name: "React" }],
            postedOn: "02/17/2020",
            user: {
                name: "Yuki Inoue",
                src:
                    "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png"
            },
            status: "🔥",
            id: 2
        },
        {
            title: "中央寄せできない",
            tags: [{ name: "HTML" }, { name: "CSS" }],
            postedOn: "02/17/2020",
            user: {
                name: "Jun Aida",
                src:
                    "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png"
            },
            status: "😆",
            id: 3
        }
    ]
};

storiesOf("organisms/PostItemList", module).add("PostItemList", () => {
    return <PostItemList {...mockProps} />;
});
