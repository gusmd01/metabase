import styled from "@emotion/styled";

import { AggregationPicker as BaseAggregationPicker } from "metabase/common/components/AggregationPicker";
import SidebarContent from "metabase/query_builder/components/SidebarContent";

export const SidebarView = styled(SidebarContent)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f0f2f5;
  border-radius: 16px;
  margin-top: 5px;
  height: calc(100% - 5px);
`;

const Section = styled.section`
  padding: 1.5rem;
`;

export const SectionTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 14px;
  color: #404252;
`;

export const AggregationsContainer = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0;
`;

export const AggregationPicker = styled(BaseAggregationPicker)`
  color: var(--mb-color-summarize);
`;

export const ColumnListContainer = styled(Section)`
  border-top: 1px solid var(--mb-color-border);
`;
