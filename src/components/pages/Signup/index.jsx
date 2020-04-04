import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignupForm from "components/organisms/SignupForm";
import TopLayout from "components/templates/TopLayout";
import { auth, createUserProfileDocument, loginWithGoogle } from "utils/firebase/firebase.utils";

const Signup = props => {
    const [userInput, updateUserInput] = useState({
        email: null,
        password: null
    });
    const history = useHistory();

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

            const userInfo = await createUserProfileDocument(user);

            updateUserInput({ email: null, password: null });
            history.push(`/profile/${userInfo.id}`);
        } catch (error) {
            console.error("error creating user", error);
        }
    };

    const signUpWithGoogle = async () => {
        try {
            await loginWithGoogle();
            history.push("/");
            // TODO(inoue): こっちだとプロファイルに遷移、でもgoogleの時は名前などは入っているのでHome直行でもいいかと思いコメントアウト
            // const userInfo = await loginWithGoogle();
            // history.push(`/profile/${userInfo.user.uid}`);
        } catch (error) {
            console.error("error creating user", error);
        }
    }

    const formEventHandler = {
        onUserIdEnter,
        onUserPasswordEnter,
        onButtonClick,
        signUpWithGoogle
    };
    return (
        <TopLayout>
            <SignupForm
                style={{ margin: "5rem auto" }}
                {...formEventHandler}
            />
        </TopLayout>
    );
};

export default Signup;
