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
	return <h1 className="myClass">Hello world!</h1>
}
root.render(<App></App>);
