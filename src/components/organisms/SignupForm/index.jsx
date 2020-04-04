import React from "react";
import styled from "styled-components";
import FormBox from "components/molecules/FormBox";
import { NormalInput } from "components/atoms/Inputs";
import { NormalButton, GoogleSignInButton } from "components/atoms/Buttons";
import { Link } from "react-router-dom";

//TODO(aida)パスワードを再入力までやるかは要検討
const SignupForm = props => {
    const {
        onUserNameEnter,
        onUserIdEnter,
        onUserPasswordEnter,
        onButtonClick,
        signUpWithGoogle,
        ...options
    } = props;

    const form = {
        name: "サインアップ",
        buttons: [
            <NormalButton onClick={onButtonClick} size="small">
                サインアップ
            </NormalButton>,
            <GoogleSignInButton onClick={signUpWithGoogle}></GoogleSignInButton>
        ],
        Footer: () => (
            <StyledFormFooter>
                <div>
                    ログインは
                    <StyledFooterLink to="/">こちら</StyledFooterLink>
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
                        同意しているとみなします
                    </p>
                </div>
            </StyledFormFooter>
        ),
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
    return <FormBox {...form} {...options} />;
};

export default SignupForm;

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
