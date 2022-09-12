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
import { InputComponent } from '../input';
import { Button } from '../button/index';
import x from '../../assets/x.svg';
export const ModalAnnouncement = () => {
  return (
    <Container>
      <Header>
        <p className="title">Editar anúncio</p>
        <Button>
          <img src={x} alt="" />
        </Button>
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
        <InputComponent type="text" placeholder="Digitar título" />
        <InfoVehicle>
          <div>
            <span>Ano</span>
            <InputComponent type="text" placeholder="2018" />
          </div>
          <div>
            <span>Quilometragem</span>
            <InputComponent type="text" placeholder="0" />
          </div>
          <div className='priceDiv'>
            <span>Preço</span>
            <InputComponent className='priceInput' type="text" placeholder="50.000,00" />
          </div>
        </InfoVehicle>
        <span>Descrição</span>
        <InputComponent type="text" placeholder="Digitar descrição" />
        <ContentAd>
          <p className="TitleBTT">Tipo de veículo</p>
          <div className="row">
            <SellButton>Carro</SellButton>
            <AuctionButton>Moto</AuctionButton>
          </div>
        </ContentAd>
        <div className="imagesBlock">
          <p>Imagem da capa</p>
          <InputComponent
            type="text"
            placeholder="https://image.com"
            label="Imagem da capa"
          />
          <p>1&deg;Imagem da galeria</p>
          <InputComponent
            type="text"
            placeholder="https://image.com"
            label="1&deg;Imagem da galeria"
          />
          <p>2&deg;Imagem da galeria</p>
          <InputComponent
            type="text"
            placeholder="https://image.com"
            label="2&deg;Imagem da galera"
          />
        </div>
      </DivAdInfos>
      <AddButtonField>Adicionar campo para imagem da galeria</AddButtonField>
      <ContentAd>
        <div className="row">
          <SellButton>Cancelar</SellButton>
          <AuctionButton>Criar anúncio</AuctionButton>
        </div>
      </ContentAd>
    </Container>
  );
};
