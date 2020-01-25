import React from "react";
import { addDecorator } from "@storybook/react";
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
    .story-wrapper {
        padding: 2rem;
    }
`;

addDecorator(s => (
    <>
        <GlobalStyle />
        <div className="story-wrapper">{s()}</div>
    </>
));
