import React from "react";
import { storiesOf } from "@storybook/react";
import LoginForm from ".";

storiesOf("organisms/LoginForm", module).add("LoginForm", () => {
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
    return <LoginForm {...mockProps} />;
});
