import React from "react";
import { storiesOf } from "@storybook/react";
import FormBox from ".";
import { NormalInput, PasswordInput } from "components/atoms/Inputs";
import { NormalButton } from "components/atoms/Buttons";

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
