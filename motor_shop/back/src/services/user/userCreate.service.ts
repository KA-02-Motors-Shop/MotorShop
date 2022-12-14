import { IUser, IUserCreate } from "./../../interfaces/user/user";
import { User } from "../../entities/User";
import { AppDataSource } from "../../data-source";

const userCreateService = async ({ name, email }: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const emailAlreadyExists = users.find((user) => user.email === email);
  if (emailAlreadyExists) {
    throw new Error("Email already exists");
  }
  const user = new User();
  user.name = name;
  user.email = email;
  userRepository.create(user);
  await userRepository.save(user);
  return user;
};
export default userCreateService;
