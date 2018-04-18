import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
// import expenses from '../fixtures/expenses';
// import expensesTotal from '../../selectors/expenses-total';
// import store from '../../store/configureStore';
// import expensesTotal from '../../selectors/expenses-total';
// import { Provider } from 'react-redux';
// import ExpensesSummary from '../../components/ExpensesSummary';

// let wrapper;

// beforeEach(() => {
// 	const wrapper = shallow(
// 		<ExpensesSummary 
// 		// expense={expenses}
// 		/>
// 	);	
// });

// test('should render ExpensesSummary page correctly', () => {
// 	expect(wrapper).toMatchSnapshot();
// });

// test('should render ExpensesSummary amount correctly', () => {
// 	expect(wrapper.expense.length).toEqual(3);
// });

test('should render ExpensesSummary with 1 expense', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 1 expense', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={500} />);
	expect(wrapper).toMatchSnapshot();
});