/*jshint ignore: start*/

// const person = {
// 	name: 'Max',
// 	age: 26,
// 	location: {
// 		city: 'Nashville',
// 		temp: 44
// 	}
// };

// const {name: firstName = 'This guy', age} = person;

// console.log(`${firstName} is ${age}.`);


// const { city, temp: temperature } = person.location;
// if (city && temperature) {

// 	console.log(`Its ${temperature} in ${city}.`);

// }

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const fenderGuitar = {
	model: {
		expensive: 'American Fender',
		cheap: 'Mexican Fender'
	},
	type: 'electric',
	pickUps: 'single coil'
};

const { type, pickUps } = fenderGuitar;
const { expensive, cheap } = fenderGuitar.model;

console.log(`I have a nice ${(Math.floor(Math.random() * (2)) + 1) === 1 ? expensive : cheap} guitar that has ${pickUps} pickups and is ${type}.`)


//
// Array Destructring
//

// const address = ['1299 South Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , mediumPrice, largePrice] = item;

console.log(`A large ${coffee} costs ${largePrice}.`);