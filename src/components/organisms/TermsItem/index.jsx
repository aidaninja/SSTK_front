import React from "react";
import styled from "styled-components";
import { map } from "lodash";
import { NormalBox } from "components/atoms/Box";

const TermsListItem = props => {
    const { item, i } = props;
    const { text, nested } = item;
    return nested ? (
        <>
            <StyledListItem>
                {`${i + 1}) ${text}`}
                <ul>
                    {map(
                        nested,
                        (item, i) =>
                            console.log(item) || (
                                <TermsListItem
                                    key={`terms_${item}-${i}`}
                                    item={item}
                                    i={i}
                                />
                            )
                    )}
                </ul>
            </StyledListItem>
        </>
    ) : (
        <StyledListItem>{`${i + 1}) ${text}`}</StyledListItem>
    );
};

const TermsItem = props => {
    const { title, items, secondaryTitle, type = "" } = props;
    return (
        <StyledTermsItemWrapper>
            <StyledTermTitle>{title}</StyledTermTitle>
            {secondaryTitle ? (
                <StyledTermSecondaryTitle>
                    {secondaryTitle}
                </StyledTermSecondaryTitle>
            ) : null}
            <StyledTermContent>
                {type === "text" ? (
                    <div>
                        {map(items, (item, i) => {
                            const { text } = item;
                            return <p key={`${title}_${i}`}>{text}</p>;
                        })}
                    </div>
                ) : null}
                {type === "list" ? (
                    <StyledTermsList>
                        {map(items, (item, i) => {
                            return (
                                <TermsListItem
                                    key={`${title}_${i}`}
                                    item={item}
                                    i={i}
                                />
                            );
                        })}
                    </StyledTermsList>
                ) : null}
            </StyledTermContent>
        </StyledTermsItemWrapper>
    );
};

export default TermsItem;

const StyledTermsItemWrapper = styled(NormalBox)`
    && {
        padding: 1rem;
        :not(:first-child) {
            margin-top: 1rem;
        }
    }
`;

const StyledTermTitle = styled.h2`
    && {
        font-size: 1.8rem;
        font-weight: 700;
    }
`;

const StyledTermSecondaryTitle = styled.h3`
    && {
        margin-top: 2rem;
        font-size: 1.6rem;
    }
`;

const StyledTermsList = styled.ul`
    && {
        margin-top: 2rem;
    }
`;

const StyledListItem = styled.li`
    && {
        font-size: 1.4rem;
        line-height: 1.6;
        :not(:first-child) {
            margin-top: 1.6rem;
        }
        ul {
            margin-left: 2rem;
            margin-top: 1rem;
        }
    }
`;

const StyledTermContent = styled.div`
    && {
        margin-top: 1rem;
        p {
            font-size: 1.4rem;
            line-height: 1.6;
        }
    }
`;
