import {
  Card,
  Container,
  ContentDescription,
  ImgVehicle,
  ListVehicle,
  ProfileDiv,
  VehicleInfos,
} from "./styles";
import { CurrencyFormatter } from "../../services/formatters";
export const CardVehicleUser = ({ vehicles, type }) => {
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
              <ProfileDiv>
                <div className="word">SL</div>
                <span>Samuel Leao</span>
              </ProfileDiv>
              <VehicleInfos>
                <div>
                  <span>{vehicle.km} KM</span>
                  <span>{vehicle.year}</span>
                </div>
                <span>{CurrencyFormatter.format(vehicle.price)}</span>
              </VehicleInfos>
            </ContentDescription>
          </Card>
        ))}
      </ListVehicle>
    </Container>
  );
};
