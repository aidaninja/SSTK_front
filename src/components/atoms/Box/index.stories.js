import React from "react";
import { storiesOf } from "@storybook/react";
import { NormalBox } from "./BoxBase";

const MockComponent = props => {
    return <div>CONTENT</div>;
};

storiesOf("atom/Box/theme", module).add("default", () => (
    <NormalBox>
        <MockComponent />
    </NormalBox>
));

storiesOf("atom/Box/size", module)
    .add("small", () => (
        <NormalBox size="small">
            <MockComponent />
        </NormalBox>
    ))
    .add("medium", () => (
        <NormalBox size="medium">
            <MockComponent />
        </NormalBox>
    ))
    .add("large", () => (
        <NormalBox size="large">
            <MockComponent />
        </NormalBox>
    ));
