import React from "react";
import LoginForm from "components/organisms/LoginForm";
import TopLayout from "components/templates/TopLayout";
import { loginWithGoogle } from "utils/firebase/firebase.utils";

const Login = props => {
    return (
        <TopLayout>
            <LoginForm
                loginWithGoogle={loginWithGoogle}
                style={{ margin: "10rem auto 0" }}
            />
        </TopLayout>
    );
};

export default Login;
