import { Collection } from './models/Collection';

const collection = new Collection(`${process.env.DB_URL}/users`);

collection.on('change', () => {
	console.log(collection);
});

collection.fetch();
