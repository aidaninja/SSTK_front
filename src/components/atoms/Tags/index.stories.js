import React from "react";
import { storiesOf } from "@storybook/react";
import { NormalTag } from "./TagBase";

storiesOf("atom/Tag", module).add("default", () => (
    <NormalTag>React</NormalTag>
));
