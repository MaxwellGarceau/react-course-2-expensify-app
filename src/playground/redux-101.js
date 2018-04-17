/*jshint ignore: start*/
import { createStore } from 'redux';

const add = ({ a, b }, c) => {
	return a + b + c;
}

console.log(add({ a: 1, b: 12 }, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
		type: 'INCREMENT',
		incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const setCount = ({ count }) => ({
	type: 'SET',
	count
});

const resetCount = () => ({
	type: 'RESET'
});

const countReducer = (state = { count: 0 }, action) => {
	switch(action.type) {
	  case 'INCREMENT':
	  const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
 	    return {
	      count: state.count + incrementBy
	    };
	  case 'DECREMENT':
	  const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
	    return {
	    	count: state.count - decrementBy
	    };
	  case 'SET':
	  return {
	  	count: action.count
	  }
	  case 'RESET':
	  	return {
	  		count: state.count = 0
	  	};
	  default:
	    return state;	
	}
};

const store = createStore(countReducer);

const unSubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// Increment

// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}));

// unSubscribe();

store.dispatch({
	type: 'INCREMENT'
});

store.dispatch(incrementCount());

// Reset
store.dispatch(resetCount());

// Decrement
store.dispatch(decrementCount());

// Decrement by amount
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({count: 50}));


