import React from "react";
import TextContentBox from "components/molecules/TextContentBox";

const PostOverview = props => {
    const { overview, want, current, ...options } = props;
    const contents = [
        { name: "概要", text: overview },
        { name: "実現したいこと", text: want },
        { name: "困っていること", text: current }
    ];

    return <TextContentBox contents={contents} {...options} />;
};

export default PostOverview;
