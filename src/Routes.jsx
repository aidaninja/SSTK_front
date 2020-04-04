import React, { useEffect, useContext } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { auth, createUserProfileDocument } from "utils/firebase/firebase.utils";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStateContext } from "contexts";
import logo from "font/851H-kktt_004.ttf";

import Signup from "components/pages/Signup";
import Login from "components/pages/Login";
import Home from "components/pages/Home";
import CreatePost from "components/pages/CreatePost";
import EditPost from "components/pages/EditPost";
import Post from "components/pages/Post";
import Profile from "components/pages/Profile";
import TermsOfUse from "components/pages/TermsOfUse";
import PrivacyPolicy from "components/pages/PrivacyPolicy";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: logo;
        src: url(${logo});
    }
    ${reset}
    *,*:before,*:after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-family: 'Monaco', '游ゴシック体', 'YuGothic', sans-serif;
        font-size: 62.5%;
        background: #0E2339;
        color: #ECECEC;
        overflow-y: scroll;
    }
    a{
        text-decoration: none;
        color: inherit;
        display: block;
    }
`;

const Routes = () => {
    const { authUser, setAuthUser } = useContext(GlobalStateContext);
    console.log(authUser, "Provider authUser");

    useEffect(() => {
        //MEMO(aida) 認証情報の状態が変化した際に実行する処理を登録する
        const unsubscribe = auth.onAuthStateChanged(async userAuth => {
            //MEMO(aida) ログインした際に認証に紐づいたuser情報をstateに格納
            if (!!userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                console.log(userRef);
                userRef.onSnapshot(snapShot => {
                    setAuthUser({ id: snapShot.id, ...snapShot.data() });
                });
            }
            //MEMO(aida)  サインアウトした際にstateをnullにする
            if (!userAuth) {
                setAuthUser(null);
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <Router>
            <GlobalStyle />
            {!!authUser ? (
                <Switch>
                    <Route exact path="/post">
                        <CreatePost user={authUser} />
                    </Route>
                    <Route path="/edit/:postId">
                        <EditPost user={authUser} />
                    </Route>
                    <Route path="/post/:postId">
                        <Post user={authUser} />
                    </Route>
                    <Route path="/profile/:userId">
                        <Profile user={authUser} />
                    </Route>
                    <Route path="/">
                        <Home user={authUser} />
                    </Route>
                </Switch>
            ) : (
                <Switch>
                    <Route path="/privacy-policy">
                        <PrivacyPolicy />
                    </Route>
                    <Route path="/terms-of-use">
                        <TermsOfUse />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            )}
        </Router>
    );
};

export default Routes;
