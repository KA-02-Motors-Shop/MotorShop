import { Banner, ButtonBanner, TextBanner } from "./styles";

export const BannerComponent = () => {
  return (
    <Banner>
      <TextBanner>
        <h1>Velocidade e experiência em um lugar feito para você</h1>
        <span>Um ambiente feito para você explorar o seu melhor</span>
      </TextBanner>
      <ButtonBanner>
        <button>Leilão</button>
        <button>Carros</button>
        <button>Motos</button>
      </ButtonBanner>
    </Banner>
  );
};
