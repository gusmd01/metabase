import styled from "@emotion/styled";

import Button from "metabase/core/components/Button";

export const Container = styled.div`
  width: 472px;
`;

export const FieldWrapper = styled.div`
  padding: 0 1.5rem 1.5rem;
`;

export const ExpressionFieldWrapper = styled.div`
  padding: 1.5rem 1.5rem 1rem;
`;

export const FieldLabel = styled.label`
  display: flex;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #333;
`;

export const Footer = styled.div`
  padding: 0.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RemoveLink = styled(Button)`
  padding-right: 1rem;
`;

export const ActionButtonsWrapper = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1rem;

  button {
    border-radius: 30px;
    width: 100px;
    font-weight: 400;
  }

  .cancel_btn {
    border-color: #000;
  }

  .done_btn {
    background: #101223;
    color: #fff;
    border: 1px solid #101223;

    &[disabled] {
      opacity: 0.5;
    }
  }
`;
