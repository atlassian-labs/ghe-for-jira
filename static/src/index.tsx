import React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "./index.styles";
import { ConnectionPage } from "./ui/pages/connection";

const App = (): JSX.Element => {
  return (
    <AppContainer>
      <ConnectionPage />
    </AppContainer>
  );
};

export default ReactDOM.render(<App />, document.getElementById("root"));
