import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Anuncio } from "../entities/Anuncio";
import CreateAnuncioService from "../services/anuncio/anuncioCreate.service";

export class AnuncioController {
  static async store(request: Request, response: Response) {
    const {
      title,
      year,
      km,
      price,
      description,
      veicle_type,
      img_wlp,
      img_galery,
    } = request.body;
    const anuncio = await CreateAnuncioService.execute({
      title,
      year,
      km,
      price,
      description,
      veicle_type,
      img_wlp,
      img_galery,
    });
    return response.status(201).json(anuncio);
  }
  static async index(request: Request, response: Response) {
    const anuncioRepository = AppDataSource.getRepository(Anuncio);

    const anuncio = await anuncioRepository.find();

    return response.status(200).json(anuncio);
  }
}
