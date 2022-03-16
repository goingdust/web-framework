import axios, { AxiosResponse } from 'axios';
const dbUrl = process.env.DB_URL;

export class Sync {
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
