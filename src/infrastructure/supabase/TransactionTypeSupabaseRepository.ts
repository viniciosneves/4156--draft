import { ITransactionTypeRepository } from "../../domain/repositories/ITransactionTypeRepository";
import { ITransactionType } from "../../domain/entities/ITransactionType";
import { supabase } from "./config";

export class TransactionTypeSupabaseRepository implements ITransactionTypeRepository {
    async listAll(): Promise<ITransactionType[]> {
        const { data, error } = await supabase
            .from('transaction_type')
            .select('*')

        if (error) {
            throw error
        }

        return data || []
    }
}