import React from 'react';

import BudgetContext, { IBudget } from '../providers/budget.provider';

import { setToStorage } from '../utils/local-storage';

type Props = {
	history: any;
};

const HomePage: React.FC<Props> = ({ history }) => {
	const { budget, setBudget } = React.useContext<IBudget>(BudgetContext);

	const handleClick = () => {
		setToStorage('budget', budget);
		history.push('/budget');
	};
  return (
  	<>
	    <h2>Hello there. This is budget app, creating by React + typescript.</h2>
  		<div className="input-field col s12">
	      <input id="budget" 
	      			 type="number" 
	      			 className="validate" 
	      			 placeholder="Type your budget"
	      			 min="0" 
	      			 value={budget}
	      			 onChange={(e) => setBudget(+e.target.value)} />
	    </div>  

	    <button className="btn app-budget-btn" 
	    				disabled={budget <= 0}
	    				onClick={handleClick}>
	    				Set budget and go
	    </button>
    </>
  );
};

export default HomePage;
