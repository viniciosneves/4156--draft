import { ITransaction } from "../entities/ITransaction";
import { ITransactionRepository } from "../repositories/ITransactionRepository";

export class ListTransactions {
  constructor(private transactionRepository: ITransactionRepository) {}
  async execute(): Promise<ITransaction[]> {
  return this.transactionRepository.listAll();
  }
}