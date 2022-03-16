import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
const dbUrl = process.env.DB_URL;

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User {
	events: Eventing = new Eventing();
	sync: Sync<UserProps> = new Sync<UserProps>(`${dbUrl}/users`);
	attributes: Attributes<UserProps>;

	constructor(attrs: UserProps) {
		this.attributes = new Attributes<UserProps>(attrs);
	}
}
