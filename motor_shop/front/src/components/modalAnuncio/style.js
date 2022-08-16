import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 16px 32px;
  gap: 37px;
  position: absolute;
  background-color: blueviolet;
  width: 346px;
  height: 1241px;
  left: 10px;
  top: 94px;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
  width: 314px;
  height: 56px;
  background: #ffffff;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  .title {
    width: 116px;
    height: 20px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #212529;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;
export const ContentAd = styled.div`
  display: flex;
  flex-direction: column;
  .TitleBTT {
    width: 151px;
    height: 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    flex: none;
    flex-grow: 0;
  }
  .row {
    display: flex;
  }
`;

export const SellButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  gap: 10px;
  width: 152.5px;
  height: 48px;
  background: #4529e6;
  border: 1.5px solid #4529e6;
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 1;
`;

export const AuctionButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  gap: 10px;
  width: 154.5px;
  height: 48px;
  border: 1.5px solid #adb5bd;
  border-radius: 4px;
  flex: none;
  order: 1;
  flex-grow: 1;
`;

export const DivAdInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const InfoVehicle = styled.div`
  display: flex;
`;

export const AddButtonField = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;
  width: 314px;
  height: 38px;
  background: #edeafd;
  border: 1.5px solid #edeafd;
  border-radius: 4px;
  flex: none;
  order: 11;
  align-self: stretch;
  flex-grow: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 0px;
  color: #4529e6;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
