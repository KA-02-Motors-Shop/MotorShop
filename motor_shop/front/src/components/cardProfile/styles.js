import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 457px;
  max-height: 500px;
  background: linear-gradient(var(--brand1) 50%, var(--whiteFixed) 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  h1 {
    font-family: "Lexend";
  }
`;

export const ImgContent = styled.img`
  width: 104px;
  border-radius: 100%;
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 210px;
  .label {
    background: var(--brand4);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: var(--body-2-500);
    font-size: 14px;
    color: var(--brand1);
    border-radius: 4px;
    padding: 4px 8px 4px 8px;
  }
`;

export const ContentInfos = styled.div``;

export const ContentProfile = styled.div`
  background-color: var(--grey10);
  width: 80%;
  min-height: 306px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  @media (max-width: 739px) {
    margin-top: 115px;
  }
  padding: 30px;
`;
export const DivDescription = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: var(--grey2);
  margin: 10px 0;
`;

export const DivButton = styled.div`
  width: 160px;
  button {
    width: 100%;
    height: 48px;
    color: var(--brand1);
    font-size: var(--button-big-text);
    font-weight: var(--body-1-600);
    background-color: transparent;
    border: 1.5px solid var(--brand1);
    border-radius: 4px;
    :hover {
      background: var(--brand4);
      transition: 0.5s;
    }
  }
`;
