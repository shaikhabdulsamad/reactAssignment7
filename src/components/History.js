import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

function History() {
    const { transactions } = useContext(GlobalContext)
    const { deleteTransaction } = useContext(GlobalContext)

    return (
        <div>
            <h3>History</h3>
            <ul className="list">

                {transactions.map(transaction => (

                    <li key={transaction.id} className={transaction.amount < 0 ? "minus" : "plus"}>
                        <div className="list-text">
                            <div>
                                <span><button onClick={() => deleteTransaction(transaction.id)} class="delete-btn">x</button></span>
                                {transaction.text}
                            </div>
                            <div>
                                 <span>{transaction.amount < 0 ? "-" : "+"}{Math.abs(transaction.amount)}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default History
