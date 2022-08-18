import React from 'react';
import ReactDOM from 'react-dom/client';
import DaysOfTheWeek from './components/DaysOfTheWeek';
import Months from './components/Months';
import ZodiacSigns from './components/ZodiacSigns';
import './style/css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Створення елементу на чистому JS
// let text1 = document.createElement('div');

// Створення елементу на React(не актуальний варіант)
// let text1 = React.createElement('div',null,'Hello world!'); null - це атрибути;

// Створення елементу на React (Сучасний варіант - через JSX)
//let text1 = <h1 className="myClass">Hello world!</h1>

const App = function () {
	return (
		<div className='flex__block'>
			<ZodiacSigns/>
			<DaysOfTheWeek/>
			<Months/>
		</div>
	)
};
root.render(<App></App>);
