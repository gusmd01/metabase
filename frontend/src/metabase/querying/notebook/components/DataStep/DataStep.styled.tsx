import styled from "@emotion/styled";

import IconButtonWrapper from "metabase/components/IconButtonWrapper";

import { NotebookCell } from "../NotebookCell";

export const DataStepIconButton = styled(IconButtonWrapper)`
  color: var(--mb-color-text-white);
  padding: ${NotebookCell.CONTAINER_PADDING};
  opacity: 0.5;
`;

export const StypedWrapper = styled.div`
  .startingWrapper {
    background: #f0f2f5;

    .notebook-button {
      background: #fff;
      border: 1px solid #d2d4dacc;
      border-radius: 8px;
      padding: 6px 10px;
      color: #404252;
      font-weight: 500;
    }

    .right-container {
      margin-left: 4px;

      svg {
        color: #000;
      }
    }
  }
`;
