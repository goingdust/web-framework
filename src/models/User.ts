import { Eventing } from './Eventing';
const dbUrl = process.env.DB_URL;

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User {
	events: Eventing = new Eventing();

	constructor(private data: UserProps) {}

	get(propName: 'id' | 'name' | 'age'): string | number {
		return this.data[propName] || 'No data saved';
	}

	set(update: UserProps): void {
		this.data = { ...this.data, ...update };
	}
}
