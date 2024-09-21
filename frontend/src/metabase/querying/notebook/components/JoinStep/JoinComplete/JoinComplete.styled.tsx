import styled from "@emotion/styled";

import { NotebookCell } from "../../NotebookCell";

export const JoinCell = styled(NotebookCell)`
  flex: 1;
  align-self: start;
  background: #fff5eb;
`;

export const JoinConditionCell = styled(NotebookCell)`
  flex: 1;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #fff5eb;
`;
