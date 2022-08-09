import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import userCreateService from "../services/user/userCreate.service";

export class UserController {
  static async store(request: Request, response: Response) {
    const { name, email } = request.body;

    const usuario = await userCreateService({ name, email });

    return response.status(201).send(usuario);
  }
  static async index(request: Request, response: Response) {
    const usuriosReposiry = AppDataSource.getRepository(User);

    const usuarios = await usuriosReposiry.find();

    return response.status(200).json(usuarios);
  }
}
