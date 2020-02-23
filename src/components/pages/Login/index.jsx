import React from "react";
import LoginForm from "components/organisms/LoginForm";
import TopLayout from "components/templates/TopLayout";

const Login = props => {
    return (
        <TopLayout>
            <LoginForm style={{ margin: "10rem auto 0" }} />
        </TopLayout>
    );
};

export default Login;
