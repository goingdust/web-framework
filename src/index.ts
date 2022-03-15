import { User } from './models/User';

const user = new User({ name: 'Rudder', age: 78 });

user.save();
