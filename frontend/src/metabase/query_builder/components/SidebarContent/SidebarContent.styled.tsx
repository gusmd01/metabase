import styled from "@emotion/styled";

import ViewButton from "../view/ViewButton";

export const SidebarContentRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  font-weight: normal;
`;

export const SidebarContentMain = styled.div`
  overflow-y: auto;
  height: 100%;
`;

export const FooterButton = styled(ViewButton)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 99px;
  box-shadow: 0 2px 2px rgb(0 0 0 / 13%);
  font-size: 16px;
  font-weight: 400;
  width: calc(100% - 55px);
  padding: 8px;
`;

FooterButton.defaultProps = {
  active: true,
};
