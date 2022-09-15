import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  min-height: 583px;
  max-height: 703px;
  background: var(--brand1);
`;
export const TextBanner = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 60%;
    font-size: 44px;
    line-height: 56px;
    color: var(--grey10);
    margin-bottom: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
      font-size: 32px;
      line-height: 40px;
      width: 100%;
    }
  }
  span {
    font-weight: var(--body-1-400);
    font-size: 16px;
    line-height: 28px;
    color: var(--grey9);
  }
`;
export const ButtonBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 95%;
  button {
    padding: 12px 28px;
    width: 177.53px;
    height: 48px;
    border: 2px solid var(--grey10);
    border-radius: 4px;
    background: transparent;
    color: var(--grey10);
    font-size: 16px;
    font-weight: var(--body-1-600);
    :hover {
      filter: invert(1);
      transition: 0.4s;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
