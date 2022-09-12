import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 45px 59px;
  height: 140px;
  gap: 10px;
  background: var(--grey0);
  color: var(--whiteFixed);
  @media (max-width: 652px) {
    flex-direction: column;
    justify-content: space-around;
    height: 310.34px;
    padding: 0;
    span {
      font-size: 14px;
    }
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 50px;
  background: var(--grey1);
  border-radius: 4px;
  color: var(--whiteFixed);
  a {
    width: 100%;
  }
  a:visited,
  a:active {
    color: inherit;
  }
  :hover {
    border: 1px solid var(--whiteFixed);
  }
`;
