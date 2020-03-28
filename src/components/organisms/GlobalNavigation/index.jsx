import React from "react";
import { get, map } from "lodash";
import styled from "styled-components";
import { Lnk } from "components/atoms/Link";
import { NormalBox } from "components/atoms/Box";
import ImageText from "components/molecules/ImageText";
import icon from "img/icon";

//TODO(aida) selectedのときの状態を追加する必要がある。具体的にはフォントとアイコンの色を切り替える。アイコンとフォントが連動しないから2重の記述が必要かも（要検討）。
const GlobalNavigation = props => {
    const { user = { name: "" } } = props;
    const navigationItems = [
        {
            name: "Home",
            path: "/",
            image: { src: get(icon, "dark.home", ""), alt: "home" },
            type: ""
        },
        {
            name: "Post",
            path: "/post",
            image: { src: get(icon, "dark.assignment", ""), alt: "post" },
            type: ""
        },
        {
            name: "profile",
            path: `/profile/${get(user, "id", "")}`,
            image: {
                src: get(
                    user,
                    "photoURL",
                    "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png"
                ),
                alt: "profile"
            },
            type: "round"
        }
    ];
    return (
        <StyledGlobalNavigation>
            <StyldGlobalNavigationHeader>
                精神と時の部屋
            </StyldGlobalNavigationHeader>
            <StyledGlobalNavigationBody>
                {map(navigationItems, (item, i) => {
                    const { name, path, image, type } = item;
                    return (
                        <StyledGlobalNavigationItem key={`${name}_${i}`}>
                            <Lnk to={path}>
                                <ImageText
                                    size="large"
                                    image={image}
                                    type={type}
                                >
                                    {name}
                                </ImageText>
                            </Lnk>
                        </StyledGlobalNavigationItem>
                    );
                })}
            </StyledGlobalNavigationBody>
        </StyledGlobalNavigation>
    );
};

export default GlobalNavigation;

const StyledGlobalNavigation = styled(NormalBox)`
    && {
        padding: 2rem 1rem;
        /* MEMO(aida) max-widthは必要に応じて調整　*/
        max-width: 16rem;
    }
`;

//FIXME(aida) pタグで拡張するかはレビューが必要
const StyldGlobalNavigationHeader = styled.p`
    && {
        text-align: center;
        font-size: 1.4rem;
        font-weight: bold;
    }
`;

const StyledGlobalNavigationBody = styled.div`
    && {
        margin-top: 1rem;
    }
`;

const StyledGlobalNavigationItem = styled.div`
    && {
        font-weight: bold;
        :not(:first-child) {
            margin-top: 1rem;
        }
    }
`;
