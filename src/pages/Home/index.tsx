import styled from "styled-components"
import { Account } from "../../presentation/Account"
import { TransactionForm } from "../../presentation/TransactionForm"
import { Statement } from "../../presentation/Statement"
import { Sidebar } from "../../presentation/Sidebar"
import { ListTransactions } from "../../domain/useCases/ListTransaction"
import { TransactionSupabaseRepository } from "../../infrastructure/supabase/TransactionSupabaseRepository"
import { useEffect, useState } from "react"
import { ITransaction } from "../../domain/entities/ITransaction"

const Main = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 34px;
`

const listTransactions = new ListTransactions(new TransactionSupabaseRepository())

const Home = () => {

  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    listTransactions.execute()
      .then(data => setTransactions(data))
  }, [])

  return (
    <>
      <Sidebar />
      <Main>
        <Account />
        <TransactionForm />
      </Main>
      <div>
        <Statement allTransactions={transactions} />
      </div>
    </>
  )
}

export default Home
