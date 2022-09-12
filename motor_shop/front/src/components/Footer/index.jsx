import { Button, Container } from "./styles";
import LogoFooter from "../../assets/LogoFooter.png";
import { RiArrowDropUpLine } from "react-icons/ri";
export const Footer = () => {
  return (
    <Container>
      <img src={LogoFooter} alt="Logo" />
      <span>© 2022 - Todos os direitos reservados.</span>
      <Button>
        <a href="#">
          <RiArrowDropUpLine size={35} />
        </a>
      </Button>
    </Container>
  );
};
