import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <>
            <h4>Balance</h4>
            <h1>₹{transactions.reduce((acc,curr) => (acc+curr.amount),0)}</h1>
        </>
    )
}

