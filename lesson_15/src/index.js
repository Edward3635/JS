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
		<div>
			<Title></Title>
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
	)
}, Title = function () {
	return <h2>Дні тижня</h2>
}
root.render(<App></App>);
