import React from "react";
import styled from "styled-components";
import GlobalNavigation from "components/organisms/GlobalNavigation";
import PageHeader from "components/organisms/PageHeader";
import PostItemList from "components/organisms/PostItemList";
import { auth } from "utils/firebase/firebase.utils";

//TODO(aida) 仮の表示用のため実装が完了時、削除する。
const mockPostsProps = {
    postItems: [
        {
            title: "Reactのアニメーション分からないよー",
            tags: [{ name: "React" }, { name: "CSS" }],
            postedOn: "02/17/2020",
            user: {
                name: "Jun Aida",
                src:
                    "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png"
            },
            status: "🔥",
            id: 1
        },
        {
            title: "Reduxの使い方がわかりません",
            tags: [{ name: "React" }],
            postedOn: "02/17/2020",
            user: {
                name: "Yuki Inoue",
                src:
                    "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png"
            },
            status: "🔥",
            id: 2
        },
        {
            title: "中央寄せできない",
            tags: [{ name: "HTML" }, { name: "CSS" }],
            postedOn: "02/17/2020",
            user: {
                name: "Jun Aida",
                src:
                    "https://emojipedia.org//static/img/logo/emojipedia-logo-140.0d779a8a903c.png"
            },
            status: "😆",
            id: 3
        }
    ]
};

const Home = props => {
    const { user } = props;
    return (
        <>
            <StyledPageLayout>
                <StyledPageNavigation>
                    <GlobalNavigation />
                    {!!user && (
                        <button
                            onClick={() => {
                                auth.signOut();
                            }}
                        >
                            ログアウト
                        </button>
                    )}
                </StyledPageNavigation>
                <StyledPageContent>
                    <PageHeader>HOME</PageHeader>
                    {/* TODO(aida)リストがない場合は新規投稿を促す表示をする */}
                    {/* TODO(aida)ローディング中はローディング表示 */}
                    <PostItemList {...mockPostsProps} />
                </StyledPageContent>
            </StyledPageLayout>
        </>
    );
};

export default Home;

//TODO(aida)PageLayoutk系はどっかにまとめる
const StyledPageLayout = styled.div`
    && {
        display: flex;
        max-width: 98rem;
        margin: 0 auto;
        padding: 2rem 0;
    }
`;

const StyledPageNavigation = styled.div`
    && {
        min-width: 18rem;
        padding-top: 1rem;
    }
`;

const StyledPageContent = styled.div`
    && {
        width: 100%;
        > *:not(:first-child) {
            margin-top: 3rem;
        }
    }
`;
