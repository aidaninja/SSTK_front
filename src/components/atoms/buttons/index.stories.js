import React from "react";
import { NormalButton, AlertButton, WarningButton } from ".";
import { storiesOf } from "@storybook/react";

storiesOf("atom/Button/color", module)
    .add("default", () => <NormalButton>デフォルト</NormalButton>)
    .add("alert", () => <AlertButton color="alert">アラート</AlertButton>)
    .add("warning", () => (
        <WarningButton color="warning">ワーニング</WarningButton>
    ));

storiesOf("atom/Button/size", module)
    .add("small", () => <NormalButton size="small">スモール</NormalButton>)
    .add("medium", () => <NormalButton size="medium">ミディアム</NormalButton>)
    .add("large", () => <NormalButton size="large">ラージ</NormalButton>);
