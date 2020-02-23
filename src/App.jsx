import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "components/pages/Signup";
import Login from "components/pages/Login";

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

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/">
                    {/* TODO(aida) ログイン状態ではないとき常にログイン画面に遷移*/}
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
