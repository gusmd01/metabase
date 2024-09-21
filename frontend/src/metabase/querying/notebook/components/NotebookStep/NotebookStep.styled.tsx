import styled from "@emotion/styled";

import Button from "metabase/core/components/Button";
import { alpha, darken, lighten } from "metabase/lib/colors";
import { breakpointMinSmall } from "metabase/styled-components/theme";

const getPercentage = (number: number): string => {
  return `${number * 100}%`;
};

export const StepRoot = styled.div`
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;

  ${breakpointMinSmall} {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
`;

export const StepContent = styled.div`
  width: ${getPercentage(12 / 12)};
  position: relative;
`;

export const StepBody = styled.div`
  display: flex;
  align-items: center;

  &.Data_step {
    .step_preview {
      right: 0;
    }
  }
`;

export const StepButtonContainer = styled.div`
  width: ${getPercentage(1 / 12)};
`;

export const StepActionsContainer = styled.div`
  margin-top: 0.5rem;

  .Filter_btn {
    background: #f3edff;
  }

  .Summarize_btn {
    background: #fff5eb;
  }

  .Sort_btn,
  .column_btn,
  .limit_btn {
    background: #f9f9f9;
  }

  .large {
    border-radius: 16px;
  }
`;

interface ColorButtonProps {
  color: string;
  transparent?: boolean;
}

export const ColorButton = styled(Button)<ColorButtonProps>`
  border: none;
  color: #303030;
  background-color: ${({ color, transparent }) =>
    transparent ? null : alpha(color, 0.2)};

  &:hover {
    color: ${({ color }) => darken(color, 0.115)};
    background-color: ${({ color, transparent }) =>
      transparent ? lighten(color, 0.5) : alpha(color, 0.35)};
  }

  transition: background 300ms;
`;

interface PreviewButtonProps {
  icon?: string;
  transparent?: boolean;
  hasPreviewButton?: boolean;
}

export const PreviewButton = styled.div<PreviewButtonProps>`
  margin-left: 0.5rem;
  position: absolute;
  right: 65px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  top: -30px;
`;
