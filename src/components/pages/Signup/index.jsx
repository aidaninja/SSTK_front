import React from "react";
import SignupForm from "components/organisms/SignupForm";
import TopLayout from "components/templates/TopLayout";

const Signup = props => {
    return (
        <TopLayout>
            <SignupForm style={{ margin: "10rem auto 0" }} />
        </TopLayout>
    );
};

export default Signup;
