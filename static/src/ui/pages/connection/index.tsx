import React from "react";
import { GlobalPageContainerStyle, GlobalTitleStyle } from "../../../index.styles";
import { connectionPageCopy } from "../../../common/copy";
import { Navbar } from "../../components/navbar";
import { ConnectJiraAndGitHubImage } from "../../components/images-and-icons/ConnectJiraAndGitHub";
import { FormBase, InputProps } from "../../components/form";

export const ConnectionPage = (): JSX.Element => {

    const formFieldData: InputProps[] = [
        {
            inputHeader: connectionPageCopy.webhookUrlFieldHeader,
            inputInfo: connectionPageCopy.webhookUrlFieldInfo,
            fieldLabel: connectionPageCopy.webhookUrlFieldLabel,
            fieldName: "webhookUrl",
            type: "text",
            defaultValue: () => "webhook url",
        },
        {
            inputHeader: connectionPageCopy.secretFieldHeader,
            inputInfo: connectionPageCopy.secretFieldInfo,
            fieldLabel: connectionPageCopy.secretFieldLabel,
            fieldName: "secret",
            type: "password",
            defaultValue: () => "secret",
        }
    ];

    const onSubmit = (data) => {
        console.log(`submitted form data: ${JSON.stringify(data)}`);
    }

    return (
        <>
            <Navbar/>

            <GlobalPageContainerStyle>
                <ConnectJiraAndGitHubImage/>
                <GlobalTitleStyle>
                    {connectionPageCopy.connectionPageTitle}
                </GlobalTitleStyle>

                <FormBase
                    formFieldData={formFieldData}
                    submitButtonLabel={connectionPageCopy.connectFormSubmitButtonLabel}
                    onSubmit={onSubmit}
                />
            </GlobalPageContainerStyle>
        </>
    );
};
