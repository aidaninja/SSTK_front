import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import PageLayout from "components/templates/PageLayout";
import PageHeader from "components/organisms/PageHeader";
import ProfileBox from "components/organisms/ProfileBox";
import { firestore } from "utils/firebase/firebase.utils";

const Profile = props => {
    const { user, match } = props;
    //MEMO(aida) 表示対象のidを想定
    const { userId } = match.params;
    //MEMO(aida) ログイン中ユーザのidと表示対象のidを比較して自分のページかを判断
    const isOwner = user.id === userId;
    const [pageUser, updatePageUser] = useState(null);
    const [isEditMode, updateEditMode] = useState(false);
    const [editInput, updateEditInput] = useState({
        displayName: null,
        photoURL: null,
        intro: null
    });
    const userRef = firestore.doc(`users/${userId}`);

    const onEditProfile = e => {
        e.preventDefault();
        console.log(`[edit mode] ${isEditMode}`);
        updateEditMode(!isEditMode);
    };
    const onUpdateEditInput = (e, target) => {
        e.preventDefault();
        updateEditInput({ ...editInput, [target]: e.target.value });
    };

    useEffect(() => {
        const fetchUser = () => {
            const unsubscribe = userRef.onSnapshot(snapshot => {
                const {
                    displayName = null,
                    photoURL = null,
                    intro = null
                } = snapshot.data();
                updatePageUser({ displayName, photoURL, intro });
            });
            return unsubscribe;
        };

        const unsubscribe = fetchUser();

        return () => {
            unsubscribe();
        };
    }, [userId]);

    return (
        <PageLayout user={user}>
            <PageHeader>Profile</PageHeader>
            <ProfileBox
                user={pageUser}
                isOwner={isOwner}
                onEditProfile={onEditProfile}
            />
        </PageLayout>
    );
};

export default withRouter(Profile);
