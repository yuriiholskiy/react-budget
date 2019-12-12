import React from 'react';
import { getFromStorage } from '../utils/local-storage';

const BudgetPage: React.FC = () => {
	const budget = getFromStorage('budget') ? getFromStorage('budget') : 0;

  return (
  	<>
	  	<h2>Budget page</h2>

	  	<p>Your budget is: {budget}</p>
  	</>
  );
};

export default BudgetPage;
