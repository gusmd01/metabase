import { Flex } from "metabase/ui";

import type { NotebookStepHeaderProps } from "../../../types";

import { StyledCon, Text } from "./NotebookStepHeader.styled";

export function NotebookStepHeader({
  title,
  color,
  canRevert,
  onRevert,
}: NotebookStepHeaderProps) {
  return (
    <Flex c={color} fw="bold" mb="sm" justify={"space-between"}>
      <StyledCon>{title}</StyledCon>
      {canRevert && (
        <>
          <Text onClick={onRevert}>
            <div>Cancel</div>
          </Text>
        </>
      )}
    </Flex>
  );
}
