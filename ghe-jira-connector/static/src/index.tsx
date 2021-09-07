import { fontFamily as akFontFamily, typography } from "@atlaskit/theme";


import React from "react";
import * as ReactDOM from "react-dom";
import { AdminPage } from "./ui/admin-page/index";
import { Container } from './index.styles';





const App = () => {
  return (
    <Container>
      <AdminPage />
    </Container>
  );
};

export default ReactDOM.render(<App />, document.getElementById("root"));
