import { ITransaction } from "../../domain/entities/ITransaction";
import { TransactionAmount, TransactionDate, TransactionInfo, TransactionType, TransactionWrapper } from "./styles";

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
};

interface TransactionProps {
    transaction: ITransaction;
}

export const Transaction = ({ transaction }: TransactionProps) => {
    const formattedDate = formatDate(transaction.date);
    const formattedValue = currencyFormatter.format(transaction.value);

    return (
        <TransactionWrapper>
            <TransactionInfo>
                <TransactionType>{transaction.transaction_type.display}</TransactionType>
                <TransactionDate>{formattedDate}</TransactionDate>
            </TransactionInfo>
            <TransactionAmount>{formattedValue}</TransactionAmount>
        </TransactionWrapper>
    );
};