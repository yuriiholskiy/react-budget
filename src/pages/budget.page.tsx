import React from 'react';
import BudgetContext from '../providers/budget.provider';

import { ICost, IBudget } from '../utils/interfaces';

type BudgetPageProps = {
	costs: Array<ICost>,
	handleDeleteCost(id: string): void
};

const BudgetPage: React.FC<BudgetPageProps> = ({ costs, handleDeleteCost }) => {
	const { budget } = React.useContext<IBudget>(BudgetContext);

	const renderCosts = costs.map(({ id, title, cost, color }, index) => {
		return (
			<li className="collection-item" key={id}>
				#{index + 1}/ {title}
				<span style={{'color': color}}>{cost}</span>

				<i className="material-icons cp px-1" 
						 onClick={() => handleDeleteCost(id)}>delete</i>
			</li>
		);
	});

  return (
  	<>
	  	<h2>Budget page</h2>

	  	<p>Your budget is: {budget}</p>

	  	  <ul className="collection with-header mt-1">
	        <li className="collection-header">
	        	<h4>Costs</h4>
	        </li>
	        {renderCosts}
	      </ul>
  	</>
  );
};

export default BudgetPage;
