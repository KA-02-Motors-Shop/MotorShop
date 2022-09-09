import {
  Card,
  Container,
  ContentButtons,
  ContentDescription,
  ImgVehicle,
  ListVehicle,
  VehicleInfos,
} from "./styles";
import { CurrencyFormatter } from "../../services/formatters";
export const CardVehicleOwner = ({ vehicles, type }) => {
  return (
    <Container>
      <h1>{type}</h1>
      <ListVehicle>
        {vehicles.map((vehicle) => (
          <Card>
            <ImgVehicle>
              <img src={vehicle.img_wlp} alt={vehicle.title} />
            </ImgVehicle>
            <ContentDescription>
              <h3>{vehicle.title}</h3>
              <p>{vehicle.description}</p>
              <VehicleInfos>
                <div>
                  <span>{vehicle.km} KM</span>
                  <span>{vehicle.year}</span>
                </div>
                <span>{CurrencyFormatter.format(vehicle.price)}</span>
              </VehicleInfos>
            </ContentDescription>
            <ContentButtons>
              <button>Editar</button>
              <button>Ver como</button>
            </ContentButtons>
          </Card>
        ))}
      </ListVehicle>
    </Container>
  );
};
