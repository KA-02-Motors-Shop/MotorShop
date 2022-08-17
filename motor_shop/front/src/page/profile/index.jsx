import { CardProfile } from "../../components/cardProfile";
import { CardVehicle } from "../../components/cardVehicles";
import { useState } from "react";
import carro from "../../assets/teste.png";

export const Profile = () => {
  const [vehicles] = useState([
    {
      title: "TITULO MT LEGAL",
      year: 2007,
      km: 10000,
      price: 15.5,
      description: "DESCRICAO MT MANEIRINHA DEE SE LER",
      veicle_type: "carro",
      img_wlp: carro,
      img_galery: "saldkasldk",
    },
    {
      title: "TITULO MT LEGAL",
      year: 2007,
      km: 10000,
      price: 37162371263721362176,
      description: "DESCRICAO MT MANEIRINHA DEE SE LER",
      veicle_type: "carro",
      img_wlp: carro,
      img_galery: "saldkasldk",
    },
    {
      title: "TITULO MT LEGAL",
      year: 2007,
      km: 10000,
      price: 15.5,
      description: "DESCRICAO MT MANEIRINHA DEE SE LER",
      veicle_type: "carro",
      img_wlp: carro,
      img_galery: "saldkasldk",
    },
  ]);

  return (
    <>
      <CardProfile />
      <CardVehicle vehicles={vehicles} type="carro" />
    </>
  );
};
