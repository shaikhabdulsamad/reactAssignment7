import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

function Balance() {
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div className="balance">
             <h5 style={{fontWeight: 600,}}>Your Balance</h5>
           
             <h1  style={{marginTop:10,fontWeight:700}}>Rs.{total}</h1>
        </div>
    )
}

export default Balance
