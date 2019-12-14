import React from 'react';

import CostsFormComponent from '../components/costs-form.component';

import BudgetContext from '../providers/budget.provider';

import { IBudget, ICost } from '../utils/interfaces';
import { uuid } from '../utils/uuid';
import defaultCosts from '../utils/costs';

type BudgetPageProps = {
	costs: Array<ICost>;
	handleDeleteCost(id: string): void;
	handleChangeCost(id: string): void;
	totalSpend: number;
};

const BudgetPage: React.FC<BudgetPageProps> = () => {
	const { budget } = React.useContext<IBudget>(BudgetContext);

	const [costs, setCosts] = React.useState<Array<ICost>>(defaultCosts);
	const [title, setTitle] = React.useState<string>('');
	const [cost, setCost] = React.useState<number>(0);


	// total spend
	const totalSpend: number = costs.reduce((sum, cost) => sum + cost.cost, 0);
	//totol spend

	// handles to change costs
	const handleDeleteCost = (id: string) => {
		const newCosts = costs.filter(cost => cost.id !== id);
		setCosts(newCosts);
	};

	const handleChangeCost = (id: string) => {
		const cost = costs.find(c => c.id === id) as ICost;
		console.log(cost);
	};

	const handleAddCost = () => {
		if(!title || cost === 0) return;
		const costToAdd: ICost = {
			id: uuid(),
			title,
			cost,
			color: 'red'
		};
		setTitle('');
		setCost(0);
		setCosts(prevCosts => [costToAdd, ...prevCosts]);
	};
	// handles to change costs

	// markup
	const renderCosts = costs.map(({ id, title, cost, color }, index) => {
		return (
			<li className="collection-item df jcsb aic" key={id}>
				<div className="app-budget-title">
					#{index + 1}/ {title}
					<span className="ml-1" style={{'color': color}}>{cost}</span>
				</div>

				<div className="app-budget-icons">
					<i className="material-icons cp px-1 cp" 
						 onClick={() => handleChangeCost(id)}>create</i>
					<i className="material-icons cp px-1 cp" 
						 onClick={() => handleDeleteCost(id)}>delete</i>
				</div>
			</li>
		);
	});

  return (
  	<>
  		<CostsFormComponent title={title} 
													setTitle={setTitle} 
													cost={cost} 
													setCost={setCost} 
													handleAddCost={handleAddCost} />

	  	<p className="fz2">
	  		Your full budget is: <strong>{budget}&#8372;</strong>
	  	</p>
	  	<p className="fz2">
	  		Your budget on {new Date().toLocaleString()} is: <strong>{budget - totalSpend}&#8372;</strong>
	  	</p>

  	  <ul className="collection with-header mt-1">
        <li className="collection-header">
        	<h4>Costs</h4>
        </li>
        {renderCosts}
      </ul>

	    <p className="fz2">TotalSpend: {totalSpend}</p>
  	</>
  );
};

export default BudgetPage;
