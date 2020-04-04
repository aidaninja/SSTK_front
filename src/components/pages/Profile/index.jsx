import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { map } from "lodash";
import { withRouter, Link } from "react-router-dom";
import PageLayout from "components/templates/PageLayout";
import PageHeader from "components/organisms/PageHeader";
import ProfileBox from "components/organisms/ProfileBox";
import EditProfileForm from "components/organisms/EditProfileForm";
import PostItemList from "components/organisms/PostItemList";
import { firestore, firestorage } from "utils/firebase/firebase.utils";
import { CenteredLoader } from "components/organisms/Loader";

//TODO(aida) プロフィール画像変更の処理は見直しが必要。現状選択するたびにアップロードしているので、これは良くない。

const Profile = props => {
    const { user, match } = props;
    //MEMO(aida) 表示対象のidを想定
    const { userId } = match.params;
    //MEMO(aida) ログイン中ユーザのidと表示対象のidを比較して自分のページかを判断
    const isOwner = user.id === userId;
    const [pageUser, updatePageUser] = useState(null);
    const [isEditMode, updateEditMode] = useState(false);
    const [editInput, updateEditInput] = useState({
        displayName: "",
        photoURL: null,
        intro: ""
    });
    const userRef = firestore.doc(`users/${userId}`);

    useEffect(() => {
        const fetchUser = () => {
            const unsubscribe = userRef.onSnapshot(snapshot => {
                const {
                    displayName = "",
                    photoURL = null,
                    intro = ""
                } = snapshot.data();
                updatePageUser({ displayName, photoURL, intro });
                updateEditInput({ displayName, photoURL, intro });
            });
            return unsubscribe;
        };

        const unsubscribe = fetchUser();

        return () => {
            unsubscribe();
        };
    }, [userId]);

    const onChangeEditMode = e => {
        e.preventDefault();
        console.log(`[edit mode] ${isEditMode}`);
        updateEditMode(!isEditMode);
    };
    const onUpdateEditInput = (e, target) => {
        e.preventDefault();
        updateEditInput({ ...editInput, [target]: e.target.value });
    };

    //TODO(aida) 作り直し必須
    const onUpdateImageFile = e => {
        e.preventDefault();
        const imagePath = e.target.files[0];

        if (!imagePath) return;
        if (
            !(imagePath.type === "image/png" || imagePath.type === "image/jpeg")
        ) {
            console.log(`[update image] file must be png or jpg`);
            return;
        }

        //MEMO(aida) プロフィール画像の変更が必要な場合に実行。ファイルをアップロードし保存先のパスを取得する。
        if (imagePath !== user.photoURL) {
            const uploadTask = firestorage
                .ref(`/profile/${user.id}`)
                .put(imagePath);

            uploadTask.on(
                "state_changed",
                snapshot => {
                    console.log(snapshot);
                },
                () => {},
                () => {
                    firestorage
                        .ref("profile")
                        .child(user.id)
                        .getDownloadURL()
                        .then(firebaseURL => {
                            console.log(firebaseURL);
                            updateEditInput({
                                ...editInput,
                                photoURL: firebaseURL
                            });
                        });
                }
            );
        }
    };

    const onUpdateUser = async e => {
        e.preventDefault();
        const { displayName, intro, photoURL } = editInput;
        if (!displayName) {
            console.log("[edit profile] username must not be null...");
            return;
        }

        const snapshot = await userRef.get();
        const currentUserDocument = snapshot.data();
        try {
            await userRef.set({
                ...currentUserDocument,
                displayName,
                intro,
                photoURL
            });
        } catch (error) {
            console.log("error adding comment", error.message);
        }

        updateEditMode(false);
    };

    const [postItems, updatePostItems] = useState();

    useEffect(() => {
        const fetchData = () => {
            const postListRef = firestore
                .collection("posts")
                .orderBy("postedOn", "desc");
            const unsubscribe = postListRef.onSnapshot(snapshot => {
                const fetchedList = map(snapshot.docs, doc => {
                    const id = doc.id;
                    const { title, postedOn, user } = doc.data();
                    if (userRef.id === user.id)
                        return { id, title, postedOn, user };
                });
                const userPostList = fetchedList.filter(list => {
                    return list !== undefined;
                });
                snapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                        updatePostItems([...userPostList]);
                    }
                });
            });
            return unsubscribe;
        };
        const unsubscribe = fetchData();
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <PageLayout user={user}>
            <PageHeader>{isEditMode ? "Edit Profile" : "Profile"}</PageHeader>
            {isEditMode ? (
                <div>
                    <EditProfileForm
                        onChangeEditMode={onChangeEditMode}
                        onUpdateUser={onUpdateUser}
                        onUpdateImageFile={onUpdateImageFile}
                        editInput={editInput}
                        onUpdateEditInput={onUpdateEditInput}
                    />
                </div>
            ) : (
                <div>
                    <ProfileBox
                        user={pageUser}
                        isOwner={isOwner}
                        onEditProfile={onChangeEditMode}
                    />
                    <StyledPostsBox>
                        <PageHeader>Posts</PageHeader>
                        {postItems ? (
                            <StyledPostsBox>
                                <PostItemList postItems={postItems} />
                            </StyledPostsBox>
                        ) : (
                            <CenteredLoader />
                        )}
                    </StyledPostsBox>
                    <StyledCreatePostLink to='/post'>＋</StyledCreatePostLink>
                </div>
            )}
        </PageLayout>
    );
};

export default withRouter(Profile);

const StyledPostsBox = styled.div`
    && {
        margin-top: 3rem;
    }
`;

const StyledCreatePostLink = styled(Link)`
    && {
        position: fixed;
        // left: calc(50% + 49rem);
        right: 10%;
        bottom: 10%;
        display: inline-block;
        padding: 1rem;
        font-size: 3.6rem;
        line-height: 1;
        border: 2px solid #FFFFFF;
        border-radius: 100%;
        color: #FFFFFF;
        background-color: #3722d3;
        cursor: pointer;
        transition: background-color .2s;

        &:hover {
            background-color: #A59FD4;
        }
    }
`;