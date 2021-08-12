import ForgeUI, { render, ContextMenu, Fragment, InlineDialog, Strong, Text, useState, useProductContext } from '@forge/ui';
import { info, warn } from './detector-util/logger';

// See README.md for details on generating a Translation API key
const { DEBUG_LOGGING } = process.env;

const Panel = () => {
  // Get the context issue key
  // @ts-ignore
  const { platformContext: { issueKey } } = useProductContext();

  // Render the UI
  return (
    <Fragment>
    </Fragment>
  );
};

export const runJira = render(<Panel />);
