import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface FormFooterProps {
  hasTopBorder?: boolean;
}

const FormFooter = styled.div<FormFooterProps>`
  ${props =>
    props.hasTopBorder
      ? css`
          border-top: 1px solid var(--mb-color-border);
          margin-top: 0.5rem;
          padding-top: 1.5rem;
        `
      : null};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;

  .btn {
    border-radius: 30px;
    width: 100px;
    font-weight: 400;
  }

  .cancel-btn {
    border-color: #000;
  }

  .save-btn {
    background: #101223;
    color: #fff;
    border: 1px solid #101223;

    &[disabled] {
      opacity: 0.5;
    }
  }
`;

// eslint-disable-next-line import/no-default-export -- deprecated usage
export default FormFooter;
