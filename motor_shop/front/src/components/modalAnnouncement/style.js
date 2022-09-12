import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 16px 32px;
  gap: 37px;
  margin: 0 auto;
  background-color: var(--whiteFixed);
  position: absolute;
  width: 346px;
  height: 1241px;
  left: 50%;
  transform: translate(-50%);
  top: 94px;
  border-radius: 8px;
  border: 1px solid black;
  background: #ffffff;
  @media (min-width: 700px) {
    width: 520px;
    height: 1252px;
    top: 80px;
    border-radius: 8px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
  height: 56px;
  background: var(--whiteFixed);
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
  width: 97%;
  .TitleBTT {
    width: 151px;
    height: 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 20px;
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
  font-family: 'Inter';
  gap: 10px;
  width: 154.5px;
  color: var(--whiteFixed);
  font-size: var(--button-big-text);
  font-weight: var(--body-1-600);
  background: var(--brand1);
  margin-right: 10px;
  border: 1.5px solid;
  border-color: var(--brand1);
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
  font-weight: var(--body-1-600);
  align-items: center;
  color: var(--grey0);
  background-color: var(--whiteFixed);
  padding: 12px 28px;
  font-size: var(--button-big-text);
  gap: 10px;
  width: 154.5px;
  height: 48px;
  border: 1.5px solid;
  border-color: var(--grey4);
  border-radius: 4px;
  flex: none;
  order: 1;
  flex-grow: 1;
`;

export const DivAdInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: fill-available;
  .TitleBTT {
    font-family: 'Inter';
    font-style: normal;
    font-weight: var(--body-2-500);
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 20px;
    flex: none;
    flex-grow: 0;
  }
  .imagesBlock {
    width: inherit;
    margin: 10px 0;
    p {
      margin: 10px 0;
    }
  }
`;

export const InfoVehicle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .priceDiv {
    width: -webkit-fill-available;
    margin-right: 0;
  }
  .priceInput {
    width: -webkit-fill-available;
  }
  input {
    width: 152.5px;
  }
  div {
    width: 120px;
    margin-right: 36px;
  }
  @media (min-width: 700px) {
    justify-content: start;
    .priceDiv {
      width: 120px;
      height: 68px;
    }
    .priceInput {
      width: 148px;
      height: 48px;
    }
    div{
      width: 148px;
      margin-right: 21px;
    }
    input{
      width: 148px;
    }
  }
`;

export const AddButtonField = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;
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
  font-size: 13.7px;
  line-height: 0px;
  color: #4529e6;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
