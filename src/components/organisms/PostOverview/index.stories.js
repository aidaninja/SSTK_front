import React from "react";
import { storiesOf } from "@storybook/react";
import PostOverview from ".";

storiesOf("organisms/PostOverview", module).add("PostOverview", () => {
    const overview = "ReactのReduxがいまいち分からんよ";
    const current = "Reducer動かん";
    const want = "Reducer動かしたい";
    return <PostOverview overview={overview} current={current} want={want} />;
});
