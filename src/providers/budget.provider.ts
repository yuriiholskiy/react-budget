import React from 'react';

import { IBudget } from '../utils/interfaces';
const BudgetContext = React.createContext<IBudget | any>(0);

export default BudgetContext; 