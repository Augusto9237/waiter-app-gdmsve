import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 415px) {
    padding: 5px 20px;
    overflow: scroll;
  }
`;
