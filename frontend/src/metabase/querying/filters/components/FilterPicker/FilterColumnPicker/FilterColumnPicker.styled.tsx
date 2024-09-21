import styled from "@emotion/styled";

import AccordionList from "metabase/core/components/AccordionList";

import { MAX_WIDTH, MIN_WIDTH } from "../constants";

export const StyledAccordionList = styled(AccordionList)`
  color: var(--mb-color-filter);
  min-width: ${MIN_WIDTH}px;
  max-width: ${MAX_WIDTH}px;

  &.filter-column-picker {
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
