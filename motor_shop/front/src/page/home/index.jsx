import { useState } from "react";
import { useEffect } from "react";
import { BannerComponent } from "../../components/Banner";
import { CardVehicleUser } from "../../components/cardVehiclesUser";
import api from "../../services/api";
import { Container } from "./styles";

export const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    api
      .get("/announcements")
      .then((res) => setVehicles(res.data))
      .catch((err) => {
        console.error(`Ocorreu um erro ${err}`);
      });
  }, []);
  const filter = (vehicle) => {
    return vehicles.filter((item) => item.veicle_type === vehicle);
  };
  return (
    <Container>
      <BannerComponent />
      <CardVehicleUser vehicles={filter("Moto")} type="Moto" />
    </Container>
  );
};
