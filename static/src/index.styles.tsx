import styled from "styled-components";
import { fontFamily as akFontFamily, typography } from "@atlaskit/theme";

export const AppContainer = styled.div`
  font-family: ${akFontFamily()};
`;

export const GlobalPageContainerStyle = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 5% auto;
`;

export const GlobalTitleStyle = styled.h2`
  ${typography.h700()};
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  font-family: ${akFontFamily()};
  margin: 0;
`;
