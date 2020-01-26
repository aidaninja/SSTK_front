import React from "react";
import { storiesOf } from "@storybook/react";
import { NormalInput, PasswordInput } from "./InputBase";

storiesOf("atom/input", module)
    .add("default", () => (
        <NormalInput style={{ maxWidth: "20rem" }} label="ユーザーID" />
    ))
    .add("password", () => (
        <PasswordInput style={{ maxWidth: "20rem" }} label="パスワード" />
    ));
