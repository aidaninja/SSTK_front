import React, { useState } from "react";
import LoginForm from "components/organisms/LoginForm";
import TopLayout from "components/templates/TopLayout";
import { auth, loginWithGoogle } from "utils/firebase/firebase.utils";

const Login = props => {
    const [userInput, updateUserInput] = useState({
        email: null,
        password: null
    });

    const onUserIdEnter = e => {
        e.preventDefault();
        updateUserInput({ ...userInput, email: e.target.value });
    };
    const onUserPasswordEnter = e => {
        e.preventDefault();
        updateUserInput({ ...userInput, password: e.target.value });
    };
    const onButtonClick = async e => {
        e.preventDefault();
        const { email, password } = userInput;
        if (!email || !password) return;

        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.error("user login error", error);
        }
    };

    const formEventHandler = {
        onUserIdEnter,
        onUserPasswordEnter,
        onButtonClick,
        loginWithGoogle
    };

    return (
        <TopLayout>
            <LoginForm
                style={{ margin: "10rem auto 0" }}
                {...formEventHandler}
            />
        </TopLayout>
    );
};

export default Login;
