import styled from "@emotion/styled";

import LoadingSpinner from "metabase/components/LoadingSpinner";
import { color } from "metabase/lib/colors";

export const VisualizationRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: none;

  .test-TableInteractive-cellWrapper {
    border-top-color: #e6e6e6;
  }

  .ReactVirtualized__Grid {
    border-bottom: none;

    .table-cell-item {
      font-weight: 400;
      font-size: 12px;
      color: #101223;
    }
  }

  .CardVisualization {
    .visx-group {
      .visx-bar {
        fill: #25caf8;
      }
    }
  }
`;

export const VisualizationHeader = styled.div`
  padding: 0.5rem;
  flex-shrink: 0;
`;

export interface VisualizationSlowSpinnerProps {
  isUsuallySlow: boolean;
}

export const VisualizationActionButtonsContainer = styled.span`
  display: flex;
  align-items: center;
`;

export const VisualizationSlowSpinner = styled(
  LoadingSpinner,
)<VisualizationSlowSpinnerProps>`
  color: ${props =>
    props.isUsuallySlow ? color("accent4") : color("text-medium")};
`;
