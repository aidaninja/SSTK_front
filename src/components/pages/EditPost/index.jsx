import React from "react";
import styled from "styled-components";
import PageLayout from "components/templates/PageLayout";
import PageHeader from "components/organisms/PageHeader";

const EditPost = props => {
    const { ...restProps } = props;
    return (
        <PageLayout>
            <PageHeader>編集</PageHeader>
        </PageLayout>
    );
};

export default EditPost;
