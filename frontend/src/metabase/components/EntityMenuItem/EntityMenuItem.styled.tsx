import styled from "@emotion/styled";
import { Link } from "react-router";

import ExternalLink from "metabase/core/components/ExternalLink";
import { color } from "metabase/lib/colors";
import type { ColorName } from "metabase/lib/colors/types";
import { Icon } from "metabase/ui";

export interface MenuItemProps {
  color?: ColorName;
  hoverColor?: ColorName;
  hoverBgColor?: ColorName;
  disabled?: boolean;
}

export const MenuItemContent = styled.div<MenuItemProps>`
  display: flex;
  align-items: center;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  color: ${props =>
    color(props.disabled ? "text-light" : props.color || "text-dark")};
  padding: 0.85em 1.45em;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  opacity: 0.6;

  &:hover {
    color: ${props => color((!props.disabled && props.hoverColor) || "brand")};
    background-color: ${props =>
      !props.disabled && props.hoverBgColor
        ? color(props.hoverBgColor)
        : "#F0F2F5"};
    opacity: 1;
  }

  > .Icon {
    color: ${props =>
      color(props.disabled ? "text-light" : props.color || "text-dark")};
    margin-right: 0.65em;
  }
`;

export const MenuItemIcon = styled(Icon)`
  margin-right: 0.5rem;
`;

export const MenuItemTitle = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1rem;
  color: #101223;
`;

export const MenuLink = styled(Link)`
  display: block;
`;

export const MenuExternalLink = styled(ExternalLink)`
  text-decoration: none;
  display: block;
`;
