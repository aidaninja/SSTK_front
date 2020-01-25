import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *,*:before,*:after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <div className="App">
                <header className="App-header">
                    <h1>精神と時の部屋</h1>
                </header>
            </div>
        </>
    );
}

export default App;
