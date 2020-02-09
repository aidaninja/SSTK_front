import React from "react";
import { storiesOf } from "@storybook/react";
import { NormalInput, PasswordInput } from ".";

storiesOf("atom/Input", module)
    .add("default", () => (
        <NormalInput style={{ maxWidth: "20rem" }} label="ユーザーID" />
    ))
    .add("password", () => (
        <PasswordInput style={{ maxWidth: "20rem" }} label="パスワード" />
    ));
