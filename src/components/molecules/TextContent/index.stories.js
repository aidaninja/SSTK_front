import React from "react";
import { storiesOf } from "@storybook/react";
import TextContent from ".";

const dammyText =
    "僕たちが生きるこの世界は小さな世界がたくさん集まってできています。小さな世界の中にはさらに小さな世界があって、その世界を一番小さくすると自分一人だけの世界になります。世界は大きければ大きいほど強いです。世界は他の世界を吸収すると大きくなります。";

storiesOf("molecules/TextContent", module)
    .add("with name", () => {
        return <TextContent name="精神と時の部屋">{dammyText}</TextContent>;
    })
    .add("without name", () => {
        return <TextContent>{dammyText}</TextContent>;
    });
