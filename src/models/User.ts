import axios, { AxiosResponse } from 'axios';

const dbUrl = process.env.DB_URL;

interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

type Callback = () => void;

export class User {
	events: { [key: string]: Callback[] } = {};

	constructor(private data: UserProps) {}

	get(propName: 'id' | 'name' | 'age'): string | number {
		return this.data[propName] || 'No data saved';
	}

	set(update: UserProps): void {
		this.data = { ...this.data, ...update };
	}

	on(eventName: string, callback: Callback): void {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}

	trigger(eventName: string): void {
		const handlers = this.events[eventName];
		if (!handlers || handlers.length === 0) {
			return;
		}
		handlers.forEach(callback => callback());
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
