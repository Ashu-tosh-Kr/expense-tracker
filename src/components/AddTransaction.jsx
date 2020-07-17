import React, {useState, useContext} from 'react';
import {GlobalContext} from './GlobalState'

export const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);
	const {add} = useContext(GlobalContext);
    return (
        <div>
          <h3>Add new transaction</h3>
      		<form> 
        		<div className="form-control">
          		<label htmlFor="text">Text</label>
          		<input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        		</div>
        		<div className="form-control">
          		<label htmlFor="amount">Amount <br />
          	  (negative - expense, positive - income)</label>
          		<input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        		</div>
        		<button className="btn" onClick={(e)=>{
							e.preventDefault();
							add({text:text,amount:+amount});
							setText('');
							setAmount(0);
							}}>Add transaction</button>
      		</form>
        </div>
    )
}
