import React from "react";
import { storiesOf } from "@storybook/react";
import PageHeader from ".";

storiesOf("organisms/PageHeader", module).add("PageHeader", () => {
    return <PageHeader>HOME</PageHeader>;
});
