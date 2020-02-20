import React from "react";
// import styled from "styled-components";
import { Image } from "components/atoms/Imgs";

//TODO(aida) Emoji用のコンスタントを作成アンドインポート
//TODO(aida) props.nameの値でEmojiコンスタントから絵文字を参照して表示する

const Emoji = props => {
    const { name, size = "medium", style } = props;
    let emojiWH = size;
    if (typeof size === "string") {
        switch (size) {
            case "small":
                emojiWH = 1;
                break;
            case "large":
                emojiWH = 5;
                break;
            case "medium":
            default:
                emojiWH = 2.5;
        }
    }
    const emojiStyle = {
        width: `${emojiWH}rem`,
        height: `${emojiWH}rem`
    };
    return <Image alt={`icon_${name}`} style={{ ...style, ...emojiStyle }} />;
};

export default Emoji;
