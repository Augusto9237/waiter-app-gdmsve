import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 1;
  gap: 32px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0;
    margin-bottom: 80px;
    overflow-y: scroll;
  }

  @media (max-width: 300px) {
    overflow-y: scroll;
    margin-bottom: 80x;
  }
`;

export const Separator = styled.div`
  @media (max-width: 600px) {
    height: 1px;
    background: rgba(204, 204, 204, 0.3);
    margin: 22px 0;
  }
`;
