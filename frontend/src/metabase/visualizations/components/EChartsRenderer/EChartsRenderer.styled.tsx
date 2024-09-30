import styled from "@emotion/styled";

export const EChartsRendererRoot = styled.div`
  /* HACK: zrender adds user-select: none to the root svg element which prevents users from selecting text on charts */
  & svg {
    user-select: auto !important;

    path {
      fill: #25caf8;

      &[stroke-linejoin="bevel"] {
        stroke: #25caf8;
      }

      &[stroke="#101223"] {
        stroke: #25caf8;
      }
    }
  }
`;
