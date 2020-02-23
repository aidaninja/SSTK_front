import React from "react";
import FormBox from "components/molecules/FormBox";
import { NormalInput } from "components/atoms/Inputs";
import { NormalButton } from "components/atoms/Buttons";

//TODO(aida)パスワードを再入力までやるかは要検討
const SignupForm = props => {
    const { onUserIdEnter, onUserPasswordEnter, onButtonClick } = props;

    const form = {
        name: "サインアップ",
        buttons: [
            <NormalButton onClick={onButtonClick} size="small">
                登録
            </NormalButton>
        ],
        inputs: [
            <NormalInput
                label="e-mail"
                onChange={onUserIdEnter}
                placeholder="e-mailを入力..."
            />,
            <NormalInput
                label="パスワード"
                onChange={onUserPasswordEnter}
                placeholder="パスワードを入力..."
            />
        ]
    };
    return <FormBox {...form} />;
};

export default SignupForm;
