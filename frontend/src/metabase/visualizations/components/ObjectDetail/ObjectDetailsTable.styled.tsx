import styled from "@emotion/styled";

export const ObjectDetailsTable = styled.div`
  overflow-y: auto;
  flex: 1;
  padding: 2rem;

  .label-item {
    font-weight: 500;
    font-size: 14px;
  }

  .value-item {
    font-weight: 400;
    font-size: 14px;
  }
`;

type GridContainerProps = { cols?: number };

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 2}, minmax(0, 1fr));
  gap: 2px;
`;

export interface GridItemProps {
  colSpan?: number;
}

export const GridCell = styled.div<GridItemProps>`
  grid-column: span ${props => props.colSpan || 1} / span
    ${props => props.colSpan || 1};
`;

export const FitImage = styled.img`
  max-width: 100%;
  max-height: 18rem;
  object-fit: contain;
  margin: 1rem auto;
`;
