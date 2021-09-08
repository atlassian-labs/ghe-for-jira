import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { ConnectionPage } from ".";
import { AppContainer } from '../../../index.styles';

export default {
  title: "Pages",
  component: ConnectionPage
} as Meta;

const Template: Story<ComponentProps<typeof ConnectionPage>> = (args) => (
  <AppContainer>
    <ConnectionPage />
  </AppContainer>
);

export const ConnectionPageStory = Template.bind({});

ConnectionPageStory.args = {};
