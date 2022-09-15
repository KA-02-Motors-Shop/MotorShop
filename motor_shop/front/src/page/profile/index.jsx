import { CardProfile } from "../../components/cardProfile";
import { CardVehicleOwner } from "../../components/cardVehiclesOwner";
import { useEffect, useState } from "react";
import api from "../../services/api.js";
import { ModalAnnouncement } from "../../components/modalAnnouncement";
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
      <CardVehicleOwner vehicles={filter("Carro")} type="Carro" />
      <CardVehicleOwner vehicles={filter("Moto")} type="Motos" />
      {/* <ModalAnnouncement/> */}
    </>
  );
};
