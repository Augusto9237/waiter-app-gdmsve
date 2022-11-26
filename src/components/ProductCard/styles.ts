import styled from "styled-components";

export const ProductCardContainer = styled.div`
  position: relative;
  display: flex;
  height: 98px;
`;

export const ProductImage = styled.button`
  width: 120px;
  height: 96px;
  overflow: hidden;
  border: none;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  gap: 8px;
  margin-left: 16px;

  overflow: hidden;
  text-overflow: ellipsis;

  span {
    font-weight: 400;
    font-size: 14px;
    color: #666666;
  }
`;

export const ButtonAddProduct = styled.button`
  background: transparent;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 2px solid #d73035;
  color: #d73035;
`;
