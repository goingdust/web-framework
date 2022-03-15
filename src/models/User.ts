import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

const dbUrl = process.env.DB_URL;

interface UserProps {
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

	fetch(): void {
		axios
			.get(`${dbUrl}/users/${this.get('id')}`)
			.then((res: AxiosResponse): void => this.set(res.data));
	}

	save(): void {
		const id = this.get('id');
		if (id && id !== 'No data saved') {
			axios.put(`${dbUrl}/users/${id}`, this.data);
		} else {
			axios.post(`${dbUrl}/users`, this.data);
		}
	}
}
