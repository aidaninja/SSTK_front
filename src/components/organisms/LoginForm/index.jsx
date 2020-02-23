import React from "react";
import FormBox from "components/molecules/FormBox";
import { NormalInput, PasswordInput } from "components/atoms/Inputs";
import { NormalButton } from "components/atoms/Buttons";

const LoginForm = props => {
    const {
        onUserIdEnter,
        onUserPasswordEnter,
        onButtonClick,
        ...options
    } = props;
    const form = {
        name: "ログイン",
        buttons: [
            <NormalButton onClick={onButtonClick} size="small">
                ログイン
            </NormalButton>
        ],
        inputs: [
            <NormalInput
                label="e-mail"
                placeholder="e-mailを入力..."
                onChange={onUserIdEnter}
            />,
            <PasswordInput
                label="パスワード"
                placeholder="パスワードを入力..."
                onChange={onUserPasswordEnter}
            />
        ]
    };
    return <FormBox {...form} {...options} />;
};

export default LoginForm;
