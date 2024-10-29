import { IUser } from "../entities/IUser";
import { IUserRepository } from "../repositories/IUserRepository";

export class CreateUser {
  constructor(private userRepository: IUserRepository) {}
  async execute(user: Omit<IUser, "id">): Promise<void> {
    return this.userRepository.createUser(user);
  }
}