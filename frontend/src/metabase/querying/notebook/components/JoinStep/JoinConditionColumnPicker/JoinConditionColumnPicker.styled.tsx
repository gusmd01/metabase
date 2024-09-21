import { type Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

import { QueryColumnPicker } from "metabase/common/components/QueryColumnPicker/QueryColumnPicker";
import { alpha, color, lighten } from "metabase/lib/colors";

const getNoColumnStyle = (theme: Theme, isOpen = false) => css`
  min-height: 34px;
  padding: 8px 20px;
  color: ${alpha(theme.fn.themeColor("brand"), 0.45)};
  border: 2px solid ${isOpen ? "var(--mb-color-brand)" : alpha("brand", 0.45)};
  border-radius: 4px;

  &:hover,
  &:focus {
    border-color: var(--mb-color-brand);
  }
`;

const getHasColumnStyle = (theme: Theme, isOpen = false) => css`
  min-height: 39px;
  padding: 6px 16px 6px 10px;
  border-radius: 6px;
  background-color: ${isOpen ? lighten("brand", 0.1) : color("brand")};

  &:hover,
  &:focus {
    background-color: ${lighten(theme.fn.themeColor("brand"), 0.1)};
  }
`;

export const JoinCellItem = styled.button<{
  isColumnSelected: boolean;
  isOpen?: boolean;
  isReadOnly?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  ${({ isColumnSelected, isOpen, theme }) =>
    isColumnSelected
      ? getHasColumnStyle(theme, isOpen)
      : getNoColumnStyle(theme, isOpen)};
  cursor: ${props => (props.isReadOnly ? "default" : "pointer")};
  transition: background 300ms linear, border 300ms linear, color 300ms linear;
`;

export const JoinColumnPicker = styled(QueryColumnPicker)`
  color: var(--mb-color-brand);

  &.join-column-picker {
    input {
      border-radius: 30px;
      background-color: rgba(210, 212, 218, 0.18);
      border: none;
      font-size: 16px;
      font-weight: 400;
      padding: 0.5rem 0.75rem;
      padding-left: 2.5rem;
    }

    input:focus {
      outline: 1px solid hsl(233.7deg, 37.3%, 14.7%);
    }

    button {
      svg {
        width: 18px;
        height: 18px;
      }
    }

    h3 {
      font-size: 14px;
      font-weight: 700;
    }

    h4 {
      font-size: 12px;
      font-weight: 500;
      color: #949aab;
    }

    .list-item-con {
      margin-left: 0;
      margin-right: 0;
      padding: 0 0.5rem;
    }

    .list-item-con:hover,
    .list-item-con[aria-selected="true"] {
      background: rgba(240, 242, 245, 0.8);
      border-radius: 0;

      h4,
      svg {
        color: #101223 !important;
      }
    }
  }
`;

export const StyledWrapper = styled.div`
  .joinCellCon {
    border: 1px solid rgba(210, 212, 218, 1);
    border-radius: 8px;
    font-weight: 500;
  }
`;
