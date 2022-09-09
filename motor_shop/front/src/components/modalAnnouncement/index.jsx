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
          <input type="text" placeholder="Digitar título" />
          <InfoVehicle>
            <div>
              <span>Ano</span>
              <input type="text" placeholder="2018" />
            </div>
            <div>
              <span>Quilometragem</span>
              <input type="text" placeholder="0" />
            </div>
          </InfoVehicle>
          <span>Preço</span>
          <input type="text" placeholder="50.000,00" />
          <span>Descrição</span>
          <input type="text" placeholder="Digitar descrição" />
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
