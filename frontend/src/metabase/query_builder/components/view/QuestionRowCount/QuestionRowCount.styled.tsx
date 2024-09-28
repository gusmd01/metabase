import styled from "@emotion/styled";

import { color } from "metabase/lib/colors";

export const RowCountButton = styled.button<{ highlighted?: boolean }>`
  color: ${props =>
    props.highlighted ? color("brand") : color("text-medium")};
  font-weight: 500;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    color: var(--mb-color-brand);
  }
`;

export const RowCountStaticLabel = styled.span`
  color: var(--mb-color-text-medium);
`;
