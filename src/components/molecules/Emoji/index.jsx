import React from "react";
import { Image } from "components/atoms/Imgs";
import emojis from "img/emoji";

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
    return (
        <Image
            src={`${emojis[name]}`}
            alt={`icon_${name}`}
            style={{ ...style, ...emojiStyle }}
        />
    );
};

export default Emoji;
