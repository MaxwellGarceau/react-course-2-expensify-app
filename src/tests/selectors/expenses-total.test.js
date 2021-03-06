import React from 'react';
import moment from 'moment';
import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

// const expenses = [{
// 	id: '1',
// 	description: 'Gum',
// 	note: '',
// 	amount: 195,
// 	createdAt: 0
// }, {
// 	id: '2',
// 	description: 'Rent',
// 	note: '',
// 	amount: 109500,
// 	createdAt: moment(0).subtract(4, 'days').valueOf()
// }, {
// 	id: '3',
// 	description: 'Credit Card',
// 	note: '',
// 	amount: 4500,
// 	createdAt: moment(0).add(4, 'days').valueOf()
// }];

test('should return 0 if no expenses', () => {
const res = selectExpensesTotal([]); // map and reduce
expect(res).toEqual(0);
});

test('should correctly add up a single expense', () => {
const res = selectExpensesTotal([expenses[0]]); // map and reduce
expect(res).toEqual(195);
});

test('should correctly add up multiple expenses', () => {
const res = selectExpensesTotal(expenses); // map and reduce
expect(res).toEqual(114195);
});

// const res = selectExpensesTotal(expenses); // map and reduce