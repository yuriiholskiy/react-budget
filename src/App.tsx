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
import { IBudget } from './utils/interfaces';
import { getFromStorage } from './utils/local-storage';

// markup
const App: React.FC = () => {
	const [budget, setBudget] = React.useState<number>(+getFromStorage('budget')!);

	const budgetContext: IBudget = {
		budget,
		setBudget
	}; 
	return (
		<BudgetContext.Provider value={budgetContext}>
			<BrowserRouter>
				<div className="app-budget">
					<NavbarComponent />
					<div className="container mt-1">
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/budget" component={BudgetPage}/>
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
