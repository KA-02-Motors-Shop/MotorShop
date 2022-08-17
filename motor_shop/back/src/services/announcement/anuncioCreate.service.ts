import { Announcement } from "./../../entities/Announcement";
import { ICreateAnnouncement } from "./../../interfaces/announcement/announcement";
import { AppDataSource } from "./../../data-source";

export default class CreateAnnouncementService {
  static async execute({
    title,
    year,
    km,
    price,
    description,
    veicle_type,
    img_wlp,
    img_galery,
  }: ICreateAnnouncement): Promise<Announcement> {
    const announcementRepository = AppDataSource.getRepository(Announcement);
    const announcement = announcementRepository.create({
      title,
      year,
      km,
      price,
      description,
      veicle_type,
      img_wlp,
      img_galery,
    });
    await announcementRepository.save(announcement);

    return announcement;
  }
}
