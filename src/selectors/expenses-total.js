import React from 'react';
import moment from 'moment';

export default (expenses) => {
		return expenses
		.map((elem) => elem.amount)
		.reduce((acc, elem) => acc + elem, 0);
};

// export default getExpensesTotal;