import styled from "@emotion/styled";

export const StyledWrapper = styled.div`
  .dashedBorder-wrapper {
    background: #f3edff;
    display: flex;
    gap: 8px;

    .dnd-step {
      height: 36px;

      > div {
        height: 36px;
        background: #101223;
      }
    }

    .dashedBorder {
      > div {
        background: #fff;
      }
    }
  }
`;
