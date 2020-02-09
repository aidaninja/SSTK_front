import React from "react";
import { storiesOf } from "@storybook/react";
import FormBox from ".";
import { NormalInput, PasswordInput } from "../../atoms/Inputs";
import { NormalButton } from "../../atoms/Buttons";

const mockProps = {
    name: "ログイン",
    buttons: [<NormalButton size="small">ログイン</NormalButton>],
    inputs: [
        <NormalInput label="ユーザーID" placeholder="ユーザーIDを入力..." />,
        <PasswordInput label="パスワード" placeholder="パスワードを入力..." />
    ]
};

storiesOf("molecules/FormBox", module).add("FormBox", () => (
    <FormBox {...mockProps} />
));
