import styled from "@emotion/styled";

export const PreviewRoot = styled.div`
  background-color: #f0f2f5;
  margin-top: 10px;
  border-radius: 16px;
  padding: 16px;
  gap: 16px;

  .header {
    font-weight: 500;
    color: #000;
  }
`;

export const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const PreviewIconContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const PreviewButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.button`
  color: #ff1a26;
  font-weight: 500;
  text-decoration-line: underline;
  cursor: pointer;
`;
