import { ITransactionType } from "./ITransactionType"

export interface ITransaction {
    id: number
    transaction_type_id: number
    user_id: string
    value: number
    transaction_type: ITransactionType
    date: Date
}