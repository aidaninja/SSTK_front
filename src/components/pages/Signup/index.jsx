import React, { useState } from "react";
import SignupForm from "components/organisms/SignupForm";
import TopLayout from "components/templates/TopLayout";
import {
    auth,
    createUserProfileDocument,
    loginWithGoogle
} from "utils/firebase/firebase.utils";

const Signup = props => {
    const [userInput, updateUserInput] = useState({
        displayName: null,
        email: null,
        password: null
    });

    const onUserNameEnter = e => {
        e.preventDefault();
        updateUserInput({ ...userInput, displayName: e.target.value });
    };

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
        const { displayName, email, password } = userInput;
        if (!displayName | !email | !password) {
            console.log("[sign up] some inputs are missing ...");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, {
                displayName
            });

            updateUserInput({ email: null, password: null });
        } catch (error) {
            console.error("error creating user", error);
        }
    };

    const signUpWithGoogle = async () => {
        try {
            await loginWithGoogle();
        } catch (error) {
            console.error("error creating user", error);
        }
    };

    const formEventHandler = {
        onUserNameEnter,
        onUserIdEnter,
        onUserPasswordEnter,
        onButtonClick,
        signUpWithGoogle
    };
    return (
        <TopLayout>
            <SignupForm style={{ margin: "5rem auto" }} {...formEventHandler} />
        </TopLayout>
    );
};

export default Signup;
