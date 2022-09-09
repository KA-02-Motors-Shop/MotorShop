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
  p {
    font-weight: var(--body-1-400);
    font-size: 14px;
    line-height: 24px;
    color: var(--grey2);
  }
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: var(--grey1);
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

export const ProfileDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey2);
  }
  .word {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--brand1);
    color: var(--whiteFixed);
    font-weight: var(--body-2-500);
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
`;
