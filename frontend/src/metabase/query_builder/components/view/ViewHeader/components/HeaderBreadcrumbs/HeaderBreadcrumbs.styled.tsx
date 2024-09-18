import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Badge } from "metabase/components/Badge";

export const HeaderBadge = styled(Badge)`
  .Icon {
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
  }
`;

export const Container = styled.span<{ variant: string }>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${HeaderBadge} {
    ${props =>
      props.variant === "head" &&
      css`
        font-size: 24px;
        color: #404252;
        font-weight: 600;
      `}
  }
`;

const DividerSpan = styled.span`
  color: #404252;
  font-size: 0.8em;
  font-weight: bold;
  padding-left: 0.5em;
  padding-right: 0.5em;
  user-select: none;
`;

export function Divider({ char = "/" }: { char?: string }) {
  return <DividerSpan>{char}</DividerSpan>;
}
