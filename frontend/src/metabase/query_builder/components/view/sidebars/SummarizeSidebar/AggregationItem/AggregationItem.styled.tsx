import styled from "@emotion/styled";

import { Icon } from "metabase/ui";

export const Root = styled.button`
  display: flex;
  align-items: center;
  padding: 4px;
  font-weight: 500;
  border-radius: 4px;
  color: var(--mb-color-text-white);
  background-color: #101223;
  transition: background 300ms linear, border 300ms linear;
  min-height: 32px;
  min-width: 32px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    opacity: 0.8;
  }
`;

export const AggregationName = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const RemoveIcon = styled(Icon)`
  display: flex;
  margin-left: auto;
  opacity: 0.4;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;
