import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media (max-width: 415px) {
    flex-direction: column;
  }
`;

export const Separator = styled.div`
  height: 1px;
  background: rgba(204, 204, 204, 0.3);
  margin: 24px 0;
`;
