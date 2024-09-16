import styled from "@emotion/styled";

import { breakpointMaxMedium } from "metabase/styled-components/theme";

export const GAP_REM = 1.15;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${GAP_REM}rem;
  margin-bottom: 1.5em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: ${GAP_REM}rem;

  ${breakpointMaxMedium} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const MainBoxContent = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledTitle = styled.h3`
  font-size: 18px;
  color: #5b5d6b;
`;

export const StyledDescription = styled.div`
  font-size: 12px;
  color: #5b5d6b;
  font-weight: 500;
`;
