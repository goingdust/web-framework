import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Collection } from './Collection';

const dbUrl = process.env.DB_URL;

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User extends Model<UserProps> {
	static buildUser(attrs: UserProps): User {
		return new User(
			new Attributes<UserProps>(attrs),
			new Eventing(),
			new ApiSync<UserProps>(`${dbUrl}/users`)
		);
	}

	static buildUserCollection(): Collection<User, UserProps> {
		return new Collection<User, UserProps>(
			`${dbUrl}/users`,
			(json: UserProps) => User.buildUser(json)
		);
	}
}
