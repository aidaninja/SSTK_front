import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { auth } from "utils/firebase/firebase.utils";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "components/pages/Signup";
import Login from "components/pages/Login";
import Home from "components/pages/Home";

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

const App = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setAuthUser(user);
            console.log(user);
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
                    {!!authUser ? <Home /> : <Login />}
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
