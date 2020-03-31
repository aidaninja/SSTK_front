import React, { useEffect, useContext } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { auth, createUserProfileDocument } from "utils/firebase/firebase.utils";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "components/pages/Signup";
import Login from "components/pages/Login";
import Home from "components/pages/Home";
import CreatePost from "components/pages/CreatePost";
import Post from "components/pages/Post";
import Profile from "components/pages/Profile";
import { GlobalStateContext } from "contexts";
import logo from "font/851H-kktt_004.ttf";

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
        /* background: #150E2E; */
        /*background: #1E364D; */
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
                    <Route exact path="/">
                        <Home user={authUser} />
                    </Route>
                    <Route exact path="/post">
                        <CreatePost user={authUser} />
                    </Route>
                    <Route path="/post/:postId">
                        <Post user={authUser} />
                    </Route>
                    <Route path="/profile/:userId">
                        <Profile user={authUser} />
                    </Route>
                </Switch>
            ) : (
                <Switch>
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
