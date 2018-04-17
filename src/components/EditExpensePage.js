/*jshint ignore: start*/
import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

	handleOnSubmit = (expense) => {
			  	// this.props.dispatch(editExpense(this.props.expense.id, expense));
			  	this.props.editExpense(this.props.expense.id, expense);
			  	this.props.history.push('/');
			  };
	handleOnRemove = () => {
		  	// this.props.dispatch(removeExpense({ id: this.props.expense.id }));
		  	this.props.removeExpense({ id: this.props.expense.id });
		  	this.props.history.push('/')
		  };

	render() {
		return (
			<div>
				<ExpenseForm
				  expense={this.props.expense}
				  onSubmit={this.handleOnSubmit}
				/>
			  <button onClick={this.handleOnRemove}>
			  Remove
			  </button>			
			</div>			
		);
	}
};

// const EditExpensePage = (props) => {
// 	return (
// 		<div>
// 			<ExpenseForm
// 			  expense={props.expense}
// 			  onSubmit={(expense) => {
// 			  	props.dispatch(editExpense(props.expense.id, expense));
// 			  	props.history.push('/');
// 			  }}
// 			/>
// 		  <button onClick={(expense) => {
// 		  	props.dispatch(removeExpense({ id: props.expense.id }));
// 		  	props.history.push('/');
// 		  }}>
// 		  Remove
// 		  </button>			
// 		</div>

// 	);
// };

const mapDispatchToProps = (dispatch, props) => ({
	editExpense: (id, expense) => dispatch(editExpense(id, expense)),
	removeExpense: (id) => dispatch(removeExpense(id))
});

const mapStateToProps = (state, props) => ({
 		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);