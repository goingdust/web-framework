import axios from 'axios';
import { User } from './models/User';

const dbUrl = process.env.DB_URL;
const user = new User({ name: 'myname', age: 20 });

user.on('change', () => {
	console.log('Change #1');
});
user.on('change', () => {
	console.log('Change #2');
});
user.on('save', () => {
	console.log('Save was triggered');
});

user.trigger('save');

axios.post(`${dbUrl}/users`, {
	name: 'myname',
	age: 20,
});
