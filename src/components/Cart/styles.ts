import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: #ffffff;
  position: absolute;
  bottom: 0;

  min-height: 114px;
  padding: 24px;
`;

export const CartContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1216px;
  .Cart-total {
    font-weight: 400;
    font-size: 16px;
    color: #666666;

    h1 {
      font-weight: 600;
      font-size: 20px;
      line-height: 120%;
      color: #333333;
    }
  }

  button {
    border: none;
    background: #d73035;
    color: #ffffff;
    padding: 14px 24px;
    border-radius: 48px;
  }
`;
