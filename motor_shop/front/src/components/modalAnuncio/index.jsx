import {
  SellButton,
  AuctionButton,
  Container,
  Header,
  ContentAd,
  DivAdInfos,
  InfoVehicle,
  AddButtonField,
} from './style';
export const ModalAnuncio = () => {
  return (
    <Container>
      <Header>
        <p className="title">Editar anúncio</p>
        <span>x</span>
      </Header>
      <ContentAd>
        <p className="TitleBTT">Tipo de anúncio</p>
        <div className="row">
          <SellButton>Venda</SellButton>
          <AuctionButton>Leilão</AuctionButton>
        </div>
      </ContentAd>
      <DivAdInfos>
        <p className="TitleBTT">Informações do veículo</p>
        <span>Título</span>
        <input type="text" label="Digitar título" />
        <InfoVehicle>
          <div>
            <span>Ano</span>
            <input type="text" label="Ano" />
          </div>
          <div >
            <span>Quilometragem</span>
            <input type="text" label="Quilometragem" />
          </div>
        </InfoVehicle>
        <span>Preço</span>
        <input type="text" label="Preço" />
        <span>Descrição</span>
        <input type="text" label="Descrição" />
      </DivAdInfos>
      <ContentAd>
        <p className="TitleBTT">Tipo de veículo</p>
        <div className="row">
          <SellButton>Carro</SellButton>
          <AuctionButton>Moto</AuctionButton>
        </div>
      </ContentAd>
      <p>Imagem da capa</p>
      <input type="text" label="Imagem da capa" />
      <p>1&deg;Imagem da galeria</p>
      <input type="text" label="1&deg;Imagem da galeria" />
      <p>2&deg;Imagem da galeria</p>
      <input type="text" label="2&deg;Imagem da galera" />
      <AddButtonField>Adicionar campo para imagem </AddButtonField>
      <ContentAd>
        <div className="row">
          <SellButton>Cancelar</SellButton>
          <AuctionButton>Criar anúncio</AuctionButton>
        </div>
      </ContentAd>
    </Container>
  );
};
