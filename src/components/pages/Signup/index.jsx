import React, { useState } from "react";
import SignupForm from "components/organisms/SignupForm";
import TopLayout from "components/templates/TopLayout";
import { auth, createUserProfileDocument } from "utils/firebase/firebase.utils";

const Signup = props => {
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
        if (!email | !password) return;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user);

            updateUserInput({ email: null, password: null });
        } catch (error) {
            console.error("error creating user", error);
        }
    };

    const formEventHandler = {
        onUserIdEnter,
        onUserPasswordEnter,
        onButtonClick
    };
    return (
        <TopLayout>
            <SignupForm
                style={{ margin: "5rem auto 0" }}
                {...formEventHandler}
            />
        </TopLayout>
    );
};

export default Signup;
