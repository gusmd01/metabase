import styled from "@emotion/styled";

export const AppBarRoot = styled.header`
  z-index: 4;
  position: absolute;
  right: 0;
  top: 6px;

  @media print {
    display: none;
  }
`;
