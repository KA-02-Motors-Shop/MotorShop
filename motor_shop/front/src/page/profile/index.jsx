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

  return (
    <>
      <CardProfile />
      <CardVehicle vehicles={vehicles} type="carro" />
    </>
  );
};
