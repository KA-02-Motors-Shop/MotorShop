import { ICreateAnuncio } from "./../../interfaces/anuncio/anuncio";
import { Anuncio } from "../../entities/Anuncio";
import { AppDataSource } from "./../../data-source";

export default class CreateAnuncioService {
  static async execute({
    title,
    year,
    km,
    price,
    description,
    veicle_type,
    img_wlp,
    img_galery,
  }: ICreateAnuncio): Promise<Anuncio> {
    const anuncioRepository = AppDataSource.getRepository(Anuncio);
    const anuncio = anuncioRepository.create({
      title,
      year,
      km,
      price,
      description,
      veicle_type,
      img_wlp,
      img_galery,
    });
    await anuncioRepository.save(anuncio);

    return anuncio;
  }
}
