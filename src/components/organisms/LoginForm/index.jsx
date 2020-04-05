import React from "react";
import styled from "styled-components";
import FormBox from "components/molecules/FormBox";
import { NormalInput, PasswordInput } from "components/atoms/Inputs";
import { NormalButton, GoogleSignInButton } from "components/atoms/Buttons";
import { Link } from "react-router-dom";

const LoginForm = props => {
    const {
        onUserIdEnter,
        onUserPasswordEnter,
        onButtonClick,
        loginWithGoogle,
        ...options
    } = props;
    const form = {
        name: "ログイン",
        buttons: [
            <NormalButton onClick={onButtonClick} size="small">
                ログイン
            </NormalButton>,
            <GoogleSignInButton onClick={loginWithGoogle} />
        ],
        Footer: () => (
            <StyledFormFooter>
                <div>
                    サインアップは
                    <StyledFooterLink to="/signup">こちら</StyledFooterLink>
                    から
                </div>
                <div>
                    <p>
                        精神と時の部屋αを利用することは
                        <br />
                        その
                        <StyledFooterLink to="/terms-of-use">
                            利用規約
                        </StyledFooterLink>
                        と
                        <StyledFooterLink to="/privacy-policy">
                            プライバシーポリシー
                        </StyledFooterLink>
                        に
                        <br />
                        同意していることとします
                    </p>
                </div>
            </StyledFormFooter>
        ),
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

const StyledFormFooter = styled.div`
    && {
        text-align: center;
        div:not(:first-child) {
            margin-top: 1rem;
        }
        p {
            line-height: 1.2rem;
        }
    }
`;

const StyledFooterLink = styled(Link)`
    && {
        display: inline-block;
        text-decoration: underline;
    }
`;
