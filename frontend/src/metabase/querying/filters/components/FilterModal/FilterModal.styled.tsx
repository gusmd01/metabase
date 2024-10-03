import styled from "@emotion/styled";

import { breakpointMaxSmall } from "metabase/styled-components/theme";
import { Flex, Modal } from "metabase/ui";

export const ModalHeader = styled(Modal.Header)`
  border-bottom: 1px solid var(--mb-color-border);

  &.emotion-Modal-header {
    background-color: #f9f9f9;
    border-bottom: none;
    padding: 20px 24px;

    h2 {
      font-weight: 500;
      font-size: 20px;
      color: #101223;
    }
  }

  input {
    border: 1px solid #d2d4da;
    border-radius: 30px;
  }

  svg {
    color: #9496a1;
  }
`;

export const ModalBody = styled(Modal.Body)`
  height: calc(90vh - 10rem);

  .emotion-Text-root,
  .emotion-Button-label,
  .emotion-Tabs-tabLabel,
  .emotion-MultiSelect-defaultValueLabel {
    font-weight: normal;
  }
  ${breakpointMaxSmall} {
    height: calc(98vh - 10rem);
  }
`;

export const ModalFooter = styled(Flex)`
  border-top: 1px solid var(--mb-color-border);

  .emotion-Button-root {
    font-weight: normal;
  }
`;
