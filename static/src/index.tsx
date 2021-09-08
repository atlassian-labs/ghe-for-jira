import React from "react";
import * as ReactDOM from "react-dom";
import { AdminPage } from "./ui/pages/admin/index";
import { AppContainer } from "./index.styles";

const App = (): JSX.Element => {
  return (
    <AppContainer>
      <AdminPage />
    </AppContainer>
  );
};

export default ReactDOM.render(<App />, document.getElementById("root"));
