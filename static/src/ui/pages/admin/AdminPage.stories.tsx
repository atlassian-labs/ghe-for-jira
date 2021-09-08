import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { AdminPage } from ".";
import { AppContainer } from '../../../index.styles';

export default {
  title: "Pages",
  component: AdminPage
} as Meta;

const Template: Story<ComponentProps<typeof AdminPage>> = (args) => (
  <AppContainer>
    <AdminPage />
  </AppContainer>
);

export const AdminPageStory = Template.bind({});

AdminPageStory.args = {};
