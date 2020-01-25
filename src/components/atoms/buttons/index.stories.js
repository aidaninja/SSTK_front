import React from "react";
import Button from "./ButtonBase";
import { storiesOf } from "@storybook/react";

storiesOf("atom/button", module)
    .add("default", () => <Button>デフォルト</Button>)
    .add("alert", () => <Button color="alert">アラート</Button>)
    .add("warning", () => <Button color="warning">ワーニング</Button>)
    .add("small", () => <Button size="small">スモール</Button>)
    .add("medium", () => <Button size="medium">ミディアム</Button>)
    .add("large", () => <Button size="large">ラージ</Button>);
