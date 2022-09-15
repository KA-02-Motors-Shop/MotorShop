import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #FDFDFD;
    border-top: #ADB5BD 2px solid;
    height: 100vh;
    position: fixed;
    right: 0px;
    height: 100%;
    top: 80px;
    width: 100vw;
    animation: showSidebar .8s;
    @keyframes showSidebar {
        from {
        opacity: 1;
        width: 0;
        }
        to {
        opacity: 1;
        width: 100vw;
        }
    }
    div{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 22px 0px;
    }
    .userArea{
        border-top: #ADB5BD 2px solid;
    }
    button{
        background-color: #FDFDFD;
        border: none;
        margin: 22px 50px;
        animation: showButtons .9s;
        width: 90px;
        height: 20px;
        display: flex;
        align-items: flex-start;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
        color: #495057;
    }
    .registerBtn{
        border: 2px #DEE2E6 solid;
        border-radius: 10px;
        height: 48px;
        width: 90%;
        align-items: center;
        justify-content: center;
        align-self: center;
        margin: 22px 0px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 0px;
        color: #0B0D0D;
    }
    @keyframes showButtons {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
        }
    }
`