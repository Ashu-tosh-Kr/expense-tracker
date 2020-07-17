import React, { useContext } from 'react';
import {GlobalContext} from './GlobalState';

export const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext); 
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${transactions.reduce((acc,curr)=>(acc+(curr.amount>0?curr.amount:0)),0)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${-(transactions.reduce((acc,curr)=>(acc+(curr.amount<0?curr.amount:0)),0))}</p>
        </div>
      </div>
    )
}
