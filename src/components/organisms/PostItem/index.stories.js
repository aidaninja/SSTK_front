import React from "react";
import { storiesOf } from "@storybook/react";
import PostItem from ".";

const mockProps = {
    title: "React分からないよー",
    tags: [{ name: "React" }, { name: "CSS" }],
    postedOn: "02/17/2020",
    user: {
        displayName: "Jun Aida",
        photoURL:
            "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png"
    },
    status: "🔥"
};

storiesOf("organisms/PostItem", module).add("PostItem", () => {
    return <PostItem {...mockProps} />;
});
