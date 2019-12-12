import React from 'react';

// router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import HomePage from './pages/home.page';
import BudgetPage from './pages/budget.page';
import AboutPage from './pages/about.page';

// component
import NavbarComponent from './components/navbar.component';

// providers
import BudgetContext from './providers/budget.provider';

// utils
import { IBudget, ICost } from './utils/interfaces';
import { getFromStorage } from './utils/local-storage';
import defaultCosts from './utils/costs';

// markup
const App: React.FC = () => {
	const [budget, setBudget] = React.useState<number>(+getFromStorage('budget')!);
	const [costs, setCosts] = React.useState<Array<ICost>>(defaultCosts);

	const handleDeleteCost = (id: string) => {
		console.log(id);
	}; 


	const budgetContext: IBudget = {
		budget,
		setBudget
	}; 
	return (
		<BudgetContext.Provider value={budgetContext}>
			<BrowserRouter>
				<div className="app-budget">
					<NavbarComponent />
					<div className="container">
							
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/budget" render={(props) => <BudgetPage {...props} 
																			 costs={costs} 
																			 handleDeleteCost={handleDeleteCost} />
							} /> 
							<Route path="/about" component={AboutPage} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		</BudgetContext.Provider>
	);
}

export default App;
