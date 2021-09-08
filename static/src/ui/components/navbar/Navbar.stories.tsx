// YourComponent.stories.ts | YourComponent.stories.tsx
import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Navbar } from ".";
import { AppContainer } from '../../../index.styles';

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components",
  component: Navbar
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Navbar>> = (args) => (
  <AppContainer>
    <Navbar />
  </AppContainer>
);

export const NavbarStory = Template.bind({});

NavbarStory.args = {};
