import { User } from './models/User';

const user = new User({ name: 'Rudder', age: 78 });

user.on('change', () => {
	console.log('User was changed!');
});

user.set({ name: 'newname' });
