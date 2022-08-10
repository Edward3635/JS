import React from 'react';
import ReactDOM from 'react-dom/client';
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
			<ZodiacSigns></ZodiacSigns>
			<DaysOfTheWeek></DaysOfTheWeek>
			<Months></Months>
		</div>
	)
}, ZodiacSigns = function () {
	return (
		<div>
			<h2>Zodiac signs</h2>
			<ul>
				<li>Ram</li>
				<li>Bull</li>
				<li>Twins</li>
				<li>Crab</li>
				<li>Lion</li>
				<li>Virgin</li>
				<li>Balance</li>
				<li>Scorpion</li>
				<li>Archer</li>
				<li>Goat</li>
				<li>Water Bearer</li>
				<li>Fish</li>
			</ul>
		</div>
	);
}, Months = function () {
	return (
		<div>
			<h2>Months</h2>
			<ul>
				<li>January</li>
				<li>February</li>
				<li>March</li>
				<li>April</li>
				<li>May</li>
				<li>June</li>
				<li>July</li>
				<li>August</li>
				<li>September</li>
				<li>October</li>
				<li>November</li>
				<li>December</li>
			</ul>
		</div>
	);
}, DaysOfTheWeek = function () {
	return (
		<div>
			<h2>Days of the week</h2>
			<ul>
				<li>Monday</li>
				<li>Tuesday</li>
				<li>Wednesday</li>
				<li>Thursday</li>
				<li>Friday</li>
				<li>Saturday</li>
				<li>Sunday</li>
			</ul>
		</div>
	);
};
root.render(<App></App>);
