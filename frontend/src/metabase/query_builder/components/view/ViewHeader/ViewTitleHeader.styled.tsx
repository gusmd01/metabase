import styled from "@emotion/styled";

import LastEditInfoLabel from "metabase/components/LastEditInfoLabel";
import Button from "metabase/core/components/Button";
import { alpha, color } from "metabase/lib/colors";
import { APP_SUBHEADER_HEIGHT } from "metabase/nav/constants";
import { breakpointMaxSmall, space } from "metabase/styled-components/theme";
import { type ButtonProps, Button as MantineButton } from "metabase/ui";

import RunButtonWithTooltip from "../../RunButtonWithTooltip";
import ViewSection, { ViewHeading, ViewSubHeading } from "../ViewSection";

import { QuestionDataSource } from "./components/QuestionDataSource";

export const ViewHeaderContainer = styled(ViewSection)<{
  isNavBarOpen?: boolean;
}>`
  border: none;
  padding: 0;

  ${breakpointMaxSmall} {
    flex-direction: column;
    align-items: start;
    ${({ isNavBarOpen }) =>
      isNavBarOpen ? `margin-top: ${APP_SUBHEADER_HEIGHT};` : null}
  }
`;

export const ViewHeaderMainLeftContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ViewHeaderLeftSubHeading = styled(ViewSubHeading)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${breakpointMaxSmall} {
    flex-direction: column;
    align-items: start;
  }
`;

export const AdHocViewHeading = styled(ViewHeading)`
  margin-bottom: 0;
  margin-top: 0;
  margin-right: ${space(2)};

  > div[color="medium"] {
    font-size: 15px;
  }

  .source_label {
    font-weight: 600;
    font-size: 15px;
  }
`;

export const BackButton = styled(Button)`
  color: var(--mb-color-brand);
  padding: 0.75rem;
`;

export const BackButtonContainer = styled.span`
  margin-right: 0.75rem;
`;

export const SaveButton = styled(MantineButton)<ButtonProps>`
  border-radius: 4px;
  height: 36px;

  &[data-disabled="true"] {
    pointer-events: all;
  }
`;

export const SavedQuestionHeaderButtonContainer = styled.div<{
  isModelOrMetric: boolean;
}>`
  right: ${props => (props.isModelOrMetric ? "0px" : "0.38rem")};
`;

export const HeaderButton = styled(Button)<{
  active: boolean;
}>`
  font-size: 0.875rem;
  background-color: ${({ active, color = getDefaultColor() }) =>
    active ? color : "transparent"};
  color: ${({ active }) => (active ? color("text-white") : color("text-dark"))};

  &:hover {
    background-color: ${({ color = getDefaultColor() }) => alpha(color, 0.15)};
    color: ${({ color }) => color};
  }

  transition: background 300ms linear, border 300ms linear;

  > .Icon {
    opacity: 0.6;
  }

  @media (prefers-reduced-motion) {
    transition: none;
  }
`;

export const IconHeaderButton = styled(HeaderButton)`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

const getDefaultColor = () => color("brand");
export const StyledLastEditInfoLabel = styled(LastEditInfoLabel)`
  color: var(--mb-color-text-light);

  ${breakpointMaxSmall} {
    margin-left: 0;
    margin-top: 2px;
    margin-bottom: 4px;
  }
`;

export const StyledQuestionDataSource = styled(QuestionDataSource)`
  padding-right: 1rem;

  ${breakpointMaxSmall} {
    margin-left: 0;
    padding-right: 0;
  }
`;

export const AdHocLeftSideRoot = styled.div`
  ${breakpointMaxSmall} {
    padding: 0 1.25rem;
  }
`;

export const SavedQuestionLeftSideRoot = styled.div<{
  showSubHeader: boolean;
}>`
  ${SavedQuestionHeaderButtonContainer} {
    transition: all 400ms ease;
    position: relative;
    top: ${props => (props.showSubHeader ? "0" : "0.5rem")};
  }

  ${ViewHeaderLeftSubHeading} {
    opacity: ${props => (props.showSubHeader ? "1" : "0")};
    transition: all 400ms ease;
  }

  &:hover,
  &:focus-within {
    ${SavedQuestionHeaderButtonContainer} {
      top: 0;
    }

    ${ViewHeaderLeftSubHeading} {
      opacity: 1;
    }
  }

  ${breakpointMaxSmall} {
    padding: 0 1.25rem;

    ${SavedQuestionHeaderButtonContainer} {
      top: 0;
    }

    ${ViewHeaderLeftSubHeading} {
      opacity: 1;
    }
  }
`;

export const HeaderDivider = styled.span`
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: var(--mb-color-text-medium);
  padding-left: 0.5rem;
  padding-right: 0.25rem;
`;

export const ViewHeaderActionPanel = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 0.5rem;
  position: relative;
  top: 1px;
  padding-right: 130px;

  .emotion-UnstyledButton-root:not(.emotion-ActionIcon-root) {
    font-size: 12px;
    font-weight: 500;
    height: 36px;

    &:not([data-testid="qb-save-button"]):hover {
      background: #f9fbfc;
      color: #101223;
    }

    &.filter-btn {
      background-color: #f3edff;
      border-color: #f3edff;

      &:hover {
        background-color: #f3edff;
        opacity: 0.7;
      }
    }

    &.summarize-btn {
      background-color: #fff5eb;
      border-color: #fff5eb;

      &:hover {
        background-color: #fff5eb;
        opacity: 0.7;
      }

      &[data-active="true"] {
        background-color: #ff9b38;
        border-color: #ff9b38;

        &:hover {
          background-color: #ff9b38;
          color: #fff;
          opacity: 0.7;
        }
      }
    }
  }

  ${breakpointMaxSmall} {
    margin-left: 0;
    width: 100%;
    justify-content: space-between;
    border-top: 1px solid var(--mb-color-border);
    margin-top: 1rem;
    padding: 0.5rem 2.5rem 0 2rem;
  }
`;

export const ViewHeaderIconButtonContainer = styled.div`
  ${Button.Root} {
    padding: 0.25rem 0.5rem;
    height: 2rem;
    width: 2rem;

    &:hover {
      color: var(--mb-color-brand);
      background-color: var(--mb-color-bg-medium);
    }
  }
`;

interface ViewRunButtonWithTooltipProps {
  isDirty: boolean;
}

export const ViewRunButtonWithTooltip = styled(
  RunButtonWithTooltip,
)<ViewRunButtonWithTooltipProps>`
  color: var(--mb-color-text-dark);

  &:hover {
    color: ${props => (props.isDirty ? color("text-white") : color("brand"))};
  }
`;
