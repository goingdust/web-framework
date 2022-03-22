import axios, { AxiosResponse } from 'axios';

axios
	.get(`${process.env.DB_URL}/users`)
	.then((res: AxiosResponse) => console.log(res.data));
