import styled from "styled-components";

export const HeaderStyle = styled.header`
    background-color: #FDFDFD;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0px 25px;
    .buttons{
        display: flex;
    }
    nav{
        margin-right: 25px;
        border-right: 2px #DEE2E6 solid;
        height: 80px;
        display: flex;
        align-items: center;
    }
    .userArea{
        display: flex;
        align-items: center;
    }
    button{
        margin: 0px 10px;
        background-color: #FDFDFD;
        height: 30px;
        width: 90px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
        color: #495057;
    }
    .register{
        border: 2px #DEE2E6 solid;
        color: #0B0D0D;
        border-radius: 10px;
        height: 48px;
        width: 133px;
    }
    .menuMobile{
        height: 20px;
        width: auto;
    }
    .closeMenu{
        height: 20px;
        width: auto;
    }
    .mobileBtn{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`