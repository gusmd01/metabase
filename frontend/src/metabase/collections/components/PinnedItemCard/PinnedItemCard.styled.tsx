import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { RawMaybeLink } from "metabase/components/Badge/Badge.styled";
import Card from "metabase/components/Card";
import { MarkdownPreview } from "metabase/core/components/MarkdownPreview";
import { Box, type BoxProps, Icon } from "metabase/ui";

export const ItemCard = styled(Card)`
  border-radius: 10px;
  border: none;
  box-shadow: 3px 8px 34px #dfdfdfc2;
`;

export const ItemLink = styled(RawMaybeLink)<{ to?: string }>`
  display: block;
  height: min-content;
  ${props =>
    props.to
      ? ""
      : css`
          ${Body} {
            cursor: default;
          }
        `}
`;

export const ItemIcon = styled(Icon)`
  color: #777986;
  height: 1.1rem;
  width: 1.1rem;
`;

export const ActionsContainer = styled(Box)<BoxProps>`
  display: flex;
  align-items: center;
  gap: 0;
  visibility: hidden;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5rem;
  color: #5b5d6b;
  transition: color 0.2s ease;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const OuterContent = styled.div`
  flex-direction: row;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Description = styled(MarkdownPreview)`
  color: var(--mb-color-text-medium);
`;

export const Body = styled.div`
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    ${ActionsContainer} {
      visibility: visible;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;
