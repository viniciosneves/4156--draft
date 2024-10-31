import { ITransactionRepository } from "../repositories/ITransactionRepository";

export class CreateTransaction {
  constructor(private transactionRepository: ITransactionRepository) {}
  async execute(value: number, typeId: number, userId: string): Promise<void> {
    return this.transactionRepository.create(value, typeId, userId);
  }
}