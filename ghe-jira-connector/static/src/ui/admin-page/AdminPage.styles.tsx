import styled from "styled-components";
import { fontFamily as akFontFamily, typography } from "@atlaskit/theme";

export const AdminPageContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 5% auto;
  max-width: 600px;
`;

export const AdminPageImageContainer = styled.span`
  transform: scale(0.8);
`;

export const AdminPageTitle = styled.h2`
  ${typography.h700()};
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  font-family: ${akFontFamily()};
  margin: 0;
`;

export const AdminPageMessage = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 2em auto;
  text-align: center;
`;
