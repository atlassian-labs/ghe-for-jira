// YourComponent.stories.ts | YourComponent.stories.tsx
import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { ConnectionPage } from ".";
import { AppContainer } from '../../../index.styles';

//👇 This default export determines where your story goes in the story list
export default {
  title: "Pages",
  component: ConnectionPage
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof ConnectionPage>> = (args) => (
  <AppContainer>
    <ConnectionPage />
  </AppContainer>
);

export const ConnectionPageStory = Template.bind({});

ConnectionPageStory.args = {};
