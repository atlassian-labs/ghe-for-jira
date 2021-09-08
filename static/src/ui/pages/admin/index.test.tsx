import React from "react";
import { render, screen } from "@testing-library/react";
import { AdminPage } from ".";
import { jiraAdminPageCopy } from "../../../common/copy";

describe("Admin Page Suite", () => {
  it("Should render empty state", () => {
    render(<AdminPage />);
    const text = screen.getByText(jiraAdminPageCopy.emptyStateTitle);
    const message = screen.getByText(jiraAdminPageCopy.emptyStateMessage);
    const buttonLabel = screen.getByText(
      jiraAdminPageCopy.connectToGitHubButtonLabel
    );

    expect(text).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(buttonLabel).toBeInTheDocument();
  });
});
