import React from "react";
import styled from "styled-components";
import FormBox from "components/molecules/FormBox";
import { get } from "lodash";
import { NormalButton, AlertButton } from "components/atoms/Buttons";
import { NormalBox } from "components/atoms/Box";
import { TextInputBlock, TextAreaBlock } from "components/atoms/TextInput";
import { RoundImage } from "components/atoms/Imgs";

const EditProflieTextField = props => {
    const { label, ...restProps } = props;
    return (
        <div>
            <StyledLabel>{label}</StyledLabel>
            <StyledProfileTextField>
                <TextInputBlock {...restProps} />
            </StyledProfileTextField>
        </div>
    );
};

const EditProflieTextArea = props => {
    const { label, ...restProps } = props;
    return (
        <div>
            <StyledLabel>{label}</StyledLabel>
            <StyledProfileTextField>
                <TextAreaBlock {...restProps} />
            </StyledProfileTextField>
        </div>
    );
};

const EditProfilePicture = props => {
    const { label, current, onChange, ...restProps } = props;

    return (
        <div>
            <StyledLabel>{label}</StyledLabel>
            <StyledChangePictureField>
                <StyledRoundImage size="large" src={current} />
                <input onChange={onChange} type="file" />
            </StyledChangePictureField>
        </div>
    );
};

const StyledLabel = styled.p`
    && {
        font-size: 1.8rem;
        font-weight: bold;
    }
`;

const StyledRoundImage = styled(RoundImage)`
    && {
        width: 8rem;
        height: 8rem;
    }
`;

const StyledChangePictureField = styled.div`
    && {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`;

const StyledProfileTextField = styled.div`
    && {
        margin-top: 1rem;
        input,
        textarea {
            color: #222;
            background: #fff;
        }
    }
`;

const EditProfileForm = props => {
    const {
        onChangeEditMode,
        onUpdateUser,
        editInput,
        onUpdateEditInput,
        onUpdateImageFile
    } = props;
    const formContent = {
        inputs: [
            <EditProflieTextField
                label="Name"
                placeholder="名前を入力..."
                value={get(editInput, "displayName", "")}
                onChange={e => {
                    onUpdateEditInput(e, "displayName");
                }}
            />,
            <EditProflieTextArea
                label="Summary"
                placeholder="簡単な自己紹介を入力..."
                value={get(editInput, "intro", "")}
                onChange={e => {
                    onUpdateEditInput(e, "intro");
                }}
            />,
            <EditProfilePicture
                current={get(editInput, "photoURL")}
                label="Piture"
                onChange={onUpdateImageFile}
            />
        ],
        buttons: [
            <AlertButton onClick={onChangeEditMode} size="small">
                キャンセル
            </AlertButton>,
            <NormalButton onClick={onUpdateUser} size="small">
                更新
            </NormalButton>
        ]
    };
    return (
        <StyledEditProfileWrapper>
            <StyledEditProfileForm {...formContent} />
        </StyledEditProfileWrapper>
    );
};

export default EditProfileForm;

const StyledEditProfileWrapper = styled(NormalBox)`
    && {
        padding: 2rem 4rem;
    }
`;

const StyledEditProfileForm = styled(FormBox)`
    && {
        padding: 0;
        max-width: none;
    }
`;
