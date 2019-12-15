import { State, Action } from './types';
import { ICost } from '../../utils/interfaces';
import { uuid } from '../../utils/uuid';

const addCostAction = (state: State, title: string, cost: number): Array<ICost> => {
	if(!title || cost === 0) {
		return state.costs;
	};
	const costToAdd: ICost = {
		id: uuid(),
		title,
		cost,
		color: 'red'
	};

	return [...state.costs, costToAdd];
};

const removeCostAction = (state: State, id: string): Array<ICost> => {
	const newCosts = state.costs.filter(cost => cost.id !== id);
	return newCosts;
};

const editCostAction = (state: State, id: string): Array<ICost> => {
	return state.costs.map(c => {
		if(c.id === id) {
			console.log('ga');
		}
		return c;
	});
};

export function costsReducer(state: State, action: Action): State {
	switch (action.type) {
		case 'ADD_COST':
			return { costs: addCostAction(state, action.payload.title, action.payload.cost)}
		case 'REMOVE_COST':
			return { costs: removeCostAction(state, action.payload)};
		case 'EDIT_COST':
			return { costs: editCostAction(state, action.payload)};
		default:
			return state;
	}
}