import React from "react";
import PageLayout from "components/templates/PageLayout";
import PageHeader from "components/organisms/PageHeader";

const Profile = props => {
    const { user } = props;
    return (
        <PageLayout user={user}>
            <PageHeader>Profile</PageHeader>
        </PageLayout>
    );
};

export default Profile;
