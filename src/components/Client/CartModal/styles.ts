import styled from "styled-components";

interface ImageProps {
  image: string;
}

export const OverlayCartModal = styled.div`
  z-index: 50;
  flex: 1;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 415px) {
    padding: 2%;
    overflow-y: auto;
  }
`;

export const ModalBodyCart = styled.div`
  position: relative;
  background: #fff;
  width: 480px;
  border-radius: 8px;
  overflow: hidden;
`;

export const ButtonCloseModal = styled.button`
  border: none;
  width: 32px;
  height: 32px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  margin: 24px;
`;

export const ModalContent = styled.div`
  background: #fafafa;
  width: 100%;
  padding: 24px;

  header {
    display: flex;
    flex-direction: column;

    h1 {
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
    }

    span {
      font-weight: 400;
      font-size: 16px;
      color: #666;
      margin-top: 8px;
    }
  }
`;

export const FooterCart = styled.div`
  display: flex;
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 24px;
    background: #d73035;
    border: none;
    border-radius: 48px;
    color: #ffffff;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  span {
    font-weight: 400;
    font-size: 16px;
    color: #666666;
  }

  strong {
    font-weight: 600;
    font-size: 20px;
  }
`;
