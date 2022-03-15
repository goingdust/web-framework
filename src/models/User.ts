interface UserProps {
	name?: string;
	age?: number;
}

export class User {
	constructor(private data: UserProps) {}

	get(propName: 'name' | 'age'): string | number {
		return this.data[propName];
	}

	set(update: UserProps): void {
		this.data = { ...this.data, ...update };
	}
}
