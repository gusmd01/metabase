import styled from "@emotion/styled";

import { NotebookCell } from "../../NotebookCell";

export const JoinCell = styled(NotebookCell)`
  flex: 1;
  align-self: start;
`;

export const JoinConditionCell = styled(NotebookCell)`
  flex: 1;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const StypedWrapper = styled.div`
  .data-wrapper {
    background: #f0f2f5;

    [aria-label="Right table"] {
      border: none;
    }

    .notebook-button {
      background: #fff;
      border: 1px solid #d2d4dacc;
      border-radius: 8px;
      padding: 6px 10px;
      color: #404252;
      font-weight: 500;
      height: 36px;
    }

    .new_data_btn {
      height: 36px;

      > div {
        height: 36px;
      }
    }

    .add_condition {
      .iconCon {
        display: flex;
      }
    }

    .right-container {
      margin-left: 4px;

      svg {
        color: #000;
      }
    }
  }
`;
