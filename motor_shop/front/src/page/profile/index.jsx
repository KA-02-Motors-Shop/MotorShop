import { CardProfile } from "../../components/cardProfile";
import { CardVehicle } from "../../components/cardVehicles";
import { useEffect, useState } from "react";
import api from "../../services/api.js";
export const Profile = () => {
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
    <>
      <CardProfile />
      <CardVehicle vehicles={filter("Carro")} type="Carro" />
      <CardVehicle vehicles={filter("Moto")} type="Motos" />
    </>
  );
};
