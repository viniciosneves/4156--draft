import { ITransaction } from "../../domain/entities/ITransaction";
import { ITransactionRepository } from "../../domain/repositories/ITransactionRepository";
import { supabase } from "./config";

export class TransactionSupabaseRepository implements ITransactionRepository {
    async create(value: number, typeId: number, userId: string): Promise<void> {

        const { error } = await supabase
            .from('transaction')
            .insert([
                { 
                    transaction_type_id: typeId, 
                    user_id: userId, 
                    value, 
                }
            ])
            .select()

        if (error) {
            console.log(error)
            throw error
        }

    }

    async listAll(): Promise<ITransaction[]> {
        const { data, error } = await supabase
            .from('transaction')
            .select(`
                id,
                value,
                transaction_type_id,
                user_id,
                created_at,
                transaction_type (
                    id,
                    display
                )
            `)

        if (error) {
            throw error
        }

        if (!data) {
            
            return []
        }

        return data.map(row => {
            return {
                ...row,
                date: new Date(row.created_at)
            }
        })
    }
}