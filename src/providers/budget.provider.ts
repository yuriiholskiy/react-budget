import React from 'react';

export interface IBudget {
	budget: number;
	setBudget: React.Dispatch<React.SetStateAction<number>>;
};

const BudgetContext = React.createContext<IBudget | any>(0);

export default BudgetContext; 