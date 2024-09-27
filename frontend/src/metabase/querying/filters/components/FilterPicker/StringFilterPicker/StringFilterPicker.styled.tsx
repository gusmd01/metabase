import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  .emotion-Checkbox-root {
    .emotion-Checkbox-body {
      .emotion-Checkbox-inner {
        input {
          border-color: #ddd;

          &:after {
            border-color: #ddd;
          }
        }
      }
    }
  }

  .emotion-Checkbox-root[data-checked="true"] {
    .emotion-Checkbox-body {
      .emotion-Checkbox-inner {
        input {
          background: #e600e5;
          border-color: #e600e5;

          &:after {
            border-color: #e600e5;
          }
        }
      }
    }
  }

  .emotion-Input-wrapper {
    .emotion-Input-input {
      border-radius: 30px;
      background-color: rgba(210, 212, 218, 0.18);
      border: none;
      font-size: 16px;
      font-weight: 400;
      padding: 0.5rem 0.75rem;

      &:focus {
        outline: 1px solid hsl(233.7deg, 37.3%, 14.7%);
      }
    }
  }

  .emotion-UnstyledButton-root {
    &.emotion-Button-root {
      background: #101223;
      color: #fff;
      border: 1px solid #101223;
      border-radius: 30px;
      font-weight: 400;

      &[disabled] {
        opacity: 0.5;
      }
    }
  }
`;
