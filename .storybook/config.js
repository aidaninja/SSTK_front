import React from "react";
import { addDecorator } from "@storybook/react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { MemoryRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *,*:before,*:after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
        /* background: #150E2E; */
        /* background: #2d2742; */
        background: #1e364d;
        color: #ECECEC;
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

addDecorator(s => <MemoryRouter initialEntries={["/"]}>{s()}</MemoryRouter>);
