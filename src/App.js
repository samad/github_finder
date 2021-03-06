import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import About from './components/pages/About';
import './App.scss';
import AlertState from './context/alert/AlertState';
import GithubState from './context/github/GithubState';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router basename='/github-finder/'>
					<div className='App'>
						<Navbar />
						<Alert />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/about' component={About} />
							<Route
								exact
								path='/user/:login'
								render={(props) => <User {...props} />}
							/>
							<Route component={NotFound} />
						</Switch>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
