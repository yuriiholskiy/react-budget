import { ICost } from '../../utils/interfaces';
interface addPayload {
	title: string;
	cost: number;
};
export interface editPayload {
	id: string;
	newTitle: string;
	newCost: number;
};

export type State = {
	costs: Array<ICost>;
};

export type Action = | {type: 'ADD_COST', payload: addPayload} 
										 | {type: 'REMOVE_COST', payload: string} 
										 | {type: 'EDIT_COST', payload: editPayload};