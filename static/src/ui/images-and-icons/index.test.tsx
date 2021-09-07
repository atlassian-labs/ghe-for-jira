import React from "react";
import { render } from "@testing-library/react";
import { GitHubIntegrationImage } from "./GitHubIntegration";

describe("Images and Icons suite", () => {
  it("Should render BackIcon", (): void => {
    const wrapper = render(<GitHubIntegrationImage />);
    const { getByTestId } = wrapper;

    expect(getByTestId("gitHubIntegrationImage")).toBeInTheDocument();
    expect(wrapper.container).toMatchSnapshot();
  });
});
