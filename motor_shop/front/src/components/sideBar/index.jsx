import { Container } from "./styles";

export const SideBar = () => {

    return(
        <Container>
            <div>
                <button>Carros</button>
                <button>Motos</button>
                <button>Leilão</button>
            </div>
            <div className="userArea">
                <button>Fazer Login</button>
                <button className="registerBtn">Cadastrar</button>
            </div>
            
        </Container>
    )
}