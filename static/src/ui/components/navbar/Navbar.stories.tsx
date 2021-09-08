import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Navbar } from ".";
import { AppContainer } from '../../../index.styles';

export default {
  title: "Components",
  component: Navbar
} as Meta;

const Template: Story<ComponentProps<typeof Navbar>> = (args) => (
  <AppContainer>
    <Navbar />
  </AppContainer>
);

export const NavbarStory = Template.bind({});

NavbarStory.args = {};
