import React from 'react';
import './App.css';

// router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import HomePage from './pages/home.page';
import AboutPage from './pages/about.page';

// component
import NavbarComponent from './components/navbar.component';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent title="My super title" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
