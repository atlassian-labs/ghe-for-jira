import React from 'react';
import { ContentTitle } from './AdminPage.styles';
import { jiraAdminPageCopy } from '../../common/copy';

export const AdminPage = () => {
    return (
        <>
            <ContentTitle>{jiraAdminPageCopy.emptyStateTitle}</ContentTitle>
        </>
    )
};
