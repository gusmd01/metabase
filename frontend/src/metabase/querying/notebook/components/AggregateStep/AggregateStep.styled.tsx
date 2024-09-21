import styled from "@emotion/styled";

export const StyledWrapper = styled.div`
  .metrics-wrapper {
    background: #fff5eb;
    display: flex;
    gap: 8px;

    .metrics {
      > div {
        background: #fff;
      }
    }

    .dnd-step {
      height: 36px;

      > div {
        height: 36px;
        background: #101223;
      }
    }
  }
`;
