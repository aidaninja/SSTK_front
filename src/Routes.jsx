import React, { useEffect, useState, useContext } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { auth, createUserProfileDocument } from "utils/firebase/firebase.utils";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "components/pages/Signup";
import Login from "components/pages/Login";
import Home from "components/pages/Home";
import { GlobalStateContext } from "contexts";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *,*:before,*:after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
        background: #E5E5E5;
    }
`;

const Routes = () => {
    const { authUser, setAuthUser } = useContext(GlobalStateContext);
    console.log(authUser, 'Provider authUser');

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
            <Switch>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/">
                    {/* TODO(aida) ログイン状態ではないとき常にログイン画面に遷移*/}
                    {!!authUser ? <Home user={authUser} /> : <Login />}
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
