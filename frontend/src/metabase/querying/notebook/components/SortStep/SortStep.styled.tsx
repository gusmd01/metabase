import styled from "@emotion/styled";

export const SortDirectionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--mb-color-text-white);
  font-weight: 700;
  cursor: pointer;
`;

export const StyledWrapper = styled.div`
  .sort-wrapper {
    background: #f0f2f5;
  }

  .sort.dashedBorder {
    border-color: #000;

    > div {
      background: #fff;
    }

    .icon_label {
      color: #000;
      font-weight: 400;
    }
  }
`;
