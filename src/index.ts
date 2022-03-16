import { User } from './models/User';

const user = new User({ name: 'Rudder', age: 78 });

user.events.on('change', () => {
	console.log('change!');
});

user.events.trigger('change');
