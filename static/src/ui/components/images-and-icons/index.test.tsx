import React from "react";
import { render } from "@testing-library/react";
import { GitHubIntegrationImage } from "./GitHubIntegration";
import { ConnectJiraAndGitHubImage } from './ConnectJiraAndGitHub';

describe("Images and Icons suite", () => {
  it("Should render GitHub integration image", (): void => {
    const wrapper = render(<GitHubIntegrationImage />);
    const { getByTestId } = wrapper;

    expect(getByTestId("gitHubIntegrationImage")).toBeInTheDocument();
    expect(wrapper.container).toMatchSnapshot();
  });

  it("Should render Connect Jira to GitHub image", (): void => {
    const wrapper = render(<ConnectJiraAndGitHubImage />);
    const { getByTestId } = wrapper;

    expect(getByTestId("connectJiraAndGitHubImage")).toBeInTheDocument();
    expect(wrapper.container).toMatchSnapshot();
  });
});
