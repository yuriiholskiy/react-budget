import { uuid } from './uuid';

import { ICost } from './interfaces';
const defaultCosts: Array<ICost> = [
	{
		id: uuid(),
		title: 'shop',
		cost: 200,
		color: 'red'
	},
	{
		id: uuid(),
		title: 'beer',
		cost: 500,
		color: 'orange'
	},
	{
		id: uuid(),
		title: 'books',
		cost: 300,
		color: 'red'
	}
];


export default defaultCosts;