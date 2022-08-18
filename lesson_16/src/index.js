import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/css/style.css';
import data from './components/data';
import Table from './components/currencyTable'

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = function () {
	return (
		<>
			<h1>Курс валют</h1>
			<Table data={data}></Table>
		</>
	)
};
root.render(<App />);
