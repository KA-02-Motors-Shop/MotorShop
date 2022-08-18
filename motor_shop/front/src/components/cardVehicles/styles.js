import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 15px;
  h1 {
    font-size: 24px;
    margin-bottom: 62px;
  }
  padding: 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    height: 5px;
    background: var(--grey5);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--grey3);
    border-radius: 10px;
  }
`;
export const ListVehicle = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 312px;
  margin-right: 12px;
`;
export const ImgVehicle = styled.div`
  background: var(--grey7);
  text-align: center;
  margin-bottom: 16px;
  border: 2px solid var(--grey7);
  img {
    width: 262px;
    min-height: 150.28px;
  }
`;
export const ContentDescription = styled.div`
  h3,
  p,
  div {
    margin-bottom: 16px;
  }
`;
export const VehicleInfos = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: var(--body-2-500);
  color: var(--grey1);
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    display: flex;
    color: var(--brand1);
    font-size: 14px;
    font-weight: var(--body-2-500);
    gap: 12px;
    span {
      background: var(--brand4);
      padding: 4px 8px;
      border-radius: 4px;
    }
  }
`;
export const ContentButtons = styled.div`
  button {
    border: 2px solid var(--grey1);
    border-radius: 4px;
    padding: 12px 20px;
    color: var(--grey1);
    font-size: var(--button-medium-text);
    font-weight: var(--body-1-600);
    margin-right: 16px;
    :hover {
      transition: 0.4s;
      background: var(--grey1);
      color: var(--grey10);
    }
  }
`;
