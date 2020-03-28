import React from "react";
import { storiesOf } from "@storybook/react";
import ProfileBox from ".";

const mockProps = {
    user: {
        displayName: "jun aida",
        photoURL:
            "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png",
        detail: "Iam a web developer from Japan."
    },
    isOwner: true
};

storiesOf("organisms/ProfileBox", module).add("ProfileBox", () => {
    return <ProfileBox {...mockProps} />;
});
