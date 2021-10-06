import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
const initialState = {
    transactions: [
     { id: 1, text: 'Salary', amount: 50000 },
  { id: 2, text: 'Rent', amount: -20000 },
   { id: 3, text: 'Utility bill', amount: -10000 },
  { id: 4, text: 'others', amount: -1000 }
]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  function deleteTransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
  }

  function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
  }

  return(
      <GlobalContext.Provider value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction
      }}>
          {children}
      </GlobalContext.Provider>
  )

}