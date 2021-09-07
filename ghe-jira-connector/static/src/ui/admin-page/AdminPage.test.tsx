import React from "react";
import { render, screen } from "@testing-library/react";
import { AdminPage } from "./";
import { jiraAdminPageCopy } from '../../common/copy';

test("Admin Page Suite", () => {
  render(<AdminPage />);
  const text = screen.getByText(jiraAdminPageCopy.emptyStateTitle);
  expect(text).toBeInTheDocument();
});
