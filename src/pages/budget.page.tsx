import React from 'react';

import CostsFormComponent from '../components/costs-form.component';

import BudgetContext from '../providers/budget.provider';

import { IBudget, ICost } from '../utils/interfaces';
import defaultCosts from '../utils/costs';
import { setToStorage, getFromStorage } from '../utils/local-storage';

import { costsReducer } from '../reducers/costs/reducer';
import { editPayload } from '../reducers/costs/types';
const defaultState = {
	costs: JSON.parse(getFromStorage('costs') || '[]') as Array<ICost>
};
const BudgetPage: React.FC = () => {
	const { budget } = React.useContext<IBudget>(BudgetContext);
	const [state, dispatch] = React.useReducer(costsReducer, defaultState);
	const [title, setTitle] = React.useState<string>('');
	const [cost, setCost] = React.useState<number>(0);

	const [editCostId, setEditCostId] = React.useState<string>('');

	const { costs } = state;

	React.useEffect(() => {
		setToStorage('costs', JSON.stringify(costs))
	}, [costs]);
	// total spend
	const totalSpend: number = costs.reduce((sum, cost) => sum + cost.cost, 0);
	//totol spend

	// handles to change costs
	const handleDeleteCost = (id: string) => {
		dispatch({
			type: 'REMOVE_COST',
			payload: id
		});
	};
	const handleChangeCost = ({id, newTitle, newCost}: editPayload) => {
		dispatch({
			type: 'EDIT_COST',
			payload: {
				id,
				newTitle,
				newCost
			}
		});
	};
	const handleStartEditing = ({id, newTitle, newCost}: editPayload) => {
		setEditCostId(id);
		setTitle(newTitle);
		setCost(newCost);

		handleChangeCost({id, newTitle, newCost});
	};
	const handleCancelEdit = (): void => {
		setEditCostId('');
		setTitle('');
		setCost(0);
	};

	const handleAddCost = () => {
		setTitle('');
		setCost(0);
		dispatch({
			type: 'ADD_COST',
			payload: {
				title,
				cost
			}
		});
	};
	// handles to change costs

	// markup
	const renderCosts = costs.map(({ id, title, cost, color }, index) => {
		const canEdit = editCostId === id;
		return (
			<li className="collection-item df jcsb aic" key={id}>
				<div className="app-budget-title">
					#{index + 1}/ {title}
					<span className="ml-1" style={{'color': color}}>{cost}</span>
				</div>

				<div className="app-budget-icons">
					{
						canEdit ? <i className="material-icons cp px-1 cp" 
											 	 onClick={() => handleCancelEdit()}>cancel</i> :
											<i className="material-icons cp px-1 cp" 
								 				 onClick={() => handleStartEditing({id, newTitle: title, newCost: cost})}>create</i>
					}
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
													handleAddCost={handleAddCost}
													editCostId={editCostId}
													handleStartEditing={handleStartEditing}
													/>

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
