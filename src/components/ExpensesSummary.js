import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import { connect } from 'react-redux';
import numeral from 'numeral';

// export class ExpensesSummary extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<p id="expenses-count">Expenses Count: {this.props.expense.length}</p>
// 				<p id="expenses-total">Expenses Total: {numeral(selectExpensesTotal(this.props.expense) / 100).format('$0,0.00')}</p>				
// 			</div>
// 		);
// 	}
// }


// const mapStateToProps = (state) => ({
// 	expense: state.expenses
// });

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
	const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
		return (
			<div>
				<h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>			
			</div>
		);
};

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);

	return {
		expenseCount: visibleExpenses.length,
		expensesTotal: selectExpensesTotal(visibleExpenses)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);