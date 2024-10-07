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

    table {
      background-color: var(--mb-color-bg-white);
      table-layout: fixed;
      border-collapse: unset;
      border-radius: 0.5rem;
      overflow: hidden;

      thead {
        th {
          border-top: 1px solid var(--mb-color-border);

          &:first-of-type {
            border-start-start-radius: 8px;
            border-inline-start: 1px solid var(--mb-color-border);
          }

          &:last-child {
            border-start-end-radius: 8px;
            border-inline-end: 1px solid var(--mb-color-border);
          }

          font-weight: 500;
          color: #161616;

          button div {
            font-weight: 500;
            color: #161616;
          }
        }
      }

      tbody {
        tr {
          &:hover {
            background-color: #0000000a;
          }
        }

        td {
          font-size: 12px;
          color: #161616;
          font-weight: normal;
          border: none;
          background-color: transparent;
          border-top: 1px solid var(--mb-color-border);

          &:first-of-type {
            border-inline-start: 1px solid var(--mb-color-border);
          }

          &:last-child {
            border-inline-end: 1px solid var(--mb-color-border);
          }

          &:hover {
            a {
              color: #161616 !important;
            }
          }

          button {
            svg:not(.Icon-check) {
              color: #777986;
            }
          }

          a {
            h3 {
              font-weight: 400;
            }
          }
        }

        tr:last-child {
          td {
            border-bottom: 1px solid var(--mb-color-border);

            &:last-child {
              border-end-end-radius: 8px;
            }

            &:first-of-type {
              border-end-start-radius: 8px;
            }
          }
        }
      }
    }

    span {
      font-weight: normal;
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
