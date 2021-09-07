import styled from "styled-components";
import { fontFamily as akFontFamily, typography } from "@atlaskit/theme";

export const AdminPageContainer = styled.div`
  display: flex;
`;

export const ContentTitle = styled.h2`
  ${typography.h700()};
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  font-family: ${akFontFamily()};
`;
