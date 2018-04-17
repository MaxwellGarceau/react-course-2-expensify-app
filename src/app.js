/*jshint ignore: start*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
// import filtersReducer from './reducers/filters';
// import expensesReducer from './reducers/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.subscribe(() => {
// 	console.log(store.getState());
// });

// const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters);
// console.log(visibleExpenses);

const jsx = (
	<Provider store={store}> 
	  <AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));