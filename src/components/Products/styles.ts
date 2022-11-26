import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media (max-width: 415px) {
    flex-direction: column;
  }
`;
