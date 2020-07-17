import React, { useContext } from 'react'
import {GlobalContext} from './GlobalState'

export const Transaction = ({transaction}) => {
  const {del} = useContext(GlobalContext);
  return (
    <div>
      <li className={transaction.amount<0?"minus":'plus'}>
          {transaction.text}
          <span>{transaction.amount}</span>
          <button className="delete-btn"  onClick={()=> del(transaction.id)}>x</button>
        </li>
    </div>
  )
}
