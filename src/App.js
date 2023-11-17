import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route exact path='/' element={<Home />}></Route>
					<Route exact path='/search' element={<SearchPage />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
