import { Announcement } from "./../entities/Announcement";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import CreateAnnouncementService from "../services/announcement/anuncioCreate.service";

export class AnnouncementController {
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
    const announcement = await CreateAnnouncementService.execute({
      title,
      year,
      km,
      price,
      description,
      veicle_type,
      img_wlp,
      img_galery,
    });
    return response.status(201).json(announcement);
  }
  static async index(request: Request, response: Response) {
    const announcementRepository = AppDataSource.getRepository(Announcement);

    const announcement = await announcementRepository.find();

    return response.status(200).json(announcement);
  }
}
