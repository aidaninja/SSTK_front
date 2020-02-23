import React from "react";
import { storiesOf } from "@storybook/react";
import SignupForm from ".";

storiesOf("organisms/SignupForm", module).add("SignupForm", () => {
    const mockProps = {
        onUserIdEnter: () => {
            console.log("email");
        },
        onUserPasswordEnter: () => {
            console.log("password");
        },
        onButtonClick: () => {
            console.log("register");
        }
    };
    return <SignupForm {...mockProps} />;
});
