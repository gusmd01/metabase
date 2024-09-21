import styled from "@emotion/styled";

import { Flex, Modal } from "metabase/ui";

export const ModalContent = styled(Modal.Content)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  &.data-pick-modal {
    .dashedBorder.emotion-UnstyledButton-root {
      border: 1px dashed #000c;
      font-size: 14px;
      font-weight: 400;
      color: #404252;
      min-width: auto;
      border-radius: 8px;
      background: #fff;

      &:hover {
        border-radius: 8px;
        background: #fff;
      }
    }

    .emotion-Tabs-tabsList {
      background-color: #f9f9f9;
      border-bottom: 0.5px solid #d2d4da;
    }

    .emotion-NavLink-root.emotion-UnstyledButton-root {
      border-radius: 8px;
      font-size: 12px;

      &:hover {
        border-radius: 8px;
        background: #dee2e6;
      }

      &[data-active="true"] {
        background: #303030;
        color: #f0f2f5;

        .emotion-NavLink-label {
          color: #f0f2f5;
        }

        svg {
          path {
            fill: #f3f4f8;
          }
        }
      }
    }

    .emotion-Modal-header {
      background-color: #f9f9f9;
      color: #101223;

      .emotion-Modal-title {
        font-size: 20px;
        font-weight: 500;
      }

      input {
        border-radius: 30px;
        background: rgba(210, 212, 218, 0.18);
        border: none;
      }

      .emotion-Input-icon {
        color: #9496a1;
      }
    }

    .emotion-Tabs-tabLabel {
      color: #777986;
      font-size: 14px;
      font-weight: 400;
    }

    .emotion-UnstyledButton-root:hover {
      background-color: #dee2e6;
      box-shadow: 0 0 9px 0 #0000001f;
      border-radius: 0;

      .emotion-Tabs-tabLabel {
        color: #101223;
      }
    }

    .emotion-Tabs-tab {
      padding: 10px 16px 6px;
      margin-bottom: 0;
      border-color: transparent;
    }

    .emotion-Tabs-tab[data-active] {
      border-color: #000;

      .emotion-Tabs-tabLabel {
        font-weight: 600;
        color: #101223;
      }
    }

    .emotion-Stack-root {
      background: #fff;

      .emotion-Text-root {
        color: #9496a1;
        font-size: 14px;
        font-weight: 400;
        padding: 24px 24px 0 24px;
        margin-bottom: 0;
      }
    }

    .dataClassName {
      padding: 0;

      .tab-data-listCon {
        border: none;
        border-radius: 0;

        button[aria-selected="true"] {
          background-color: #dee2e6;
        }

        button {
          border-bottom: 1px solid #dfe1e5;

          .iconCon {
            background: rgba(217, 217, 217, 0.5);
            padding: 12px;
            border-radius: 50%;
            height: 40px;
            width: 40px;
          }

          .icon-text {
            font-weight: 500 !important;
            font-size: 14px;
            color: #101223;
          }

          .emotion-wxpack {
            .Icon-folder {
              color: #9496a1;
            }

            font-weight: 400;
            font-size: 12px;
            color: #9496a1 !important;
          }
        }
      }
    }
  }
`;

export const ModalBody = styled(Modal.Body)`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GrowFlex = styled(Flex)`
  flex-grow: 1;
`;

export const SinglePickerView = styled.div`
  border-top: 1px solid var(--mb-color-border);
  flex-grow: 1;
  height: 0;
`;
