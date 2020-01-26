import React from "react";
import { storiesOf } from "@storybook/react";
import { NormalInput, PasswordInput } from "./InputBase";

storiesOf("atom/input", module)
    .add("default", () => <NormalInput label="ユーザーID" />)
    .add("password", () => <PasswordInput label="パスワード" />);
