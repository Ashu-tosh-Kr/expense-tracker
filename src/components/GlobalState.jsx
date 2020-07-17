import React, {createContext, useState} from 'react';


const initialState = {
  transactions: [
    {id:1, text: 'Milk', amount: -32}, 
    {id:2, text: 'Salary', amount: 1036},
    {id:3, text: 'Flowers', amount: -12},
    {id:4, text: 'Pepsi', amount: -8},
  ]
}



export const GlobalContext = createContext();
export const GlobalProvider = ({children}) => {

  const [state, setState] = useState(initialState);
  
  function del(id) {
    setState({...state, transactions:state.transactions.filter(transaction=> transaction.id!==id)});
  }

  function add(transaction) {
    setState({...state, transactions:[...state.transactions, {id:state.transactions.length+1, text: transaction.text, amount:transaction.amount}]});
  }

  return (
  <GlobalContext.Provider value={{transactions: state.transactions, del, add}}>
    {children}
  </GlobalContext.Provider>
);}
