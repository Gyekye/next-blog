//* Typescript types for the project

export type Post = {
	id: number,
	title: string,
	author: string | undefined,
	body: string
	date: string
}

export type Product = {
	id: number,
	name: string,
	price: number
}

export type User = {
	id: number,
	name: string,
	username: string,
	email: string,
	address: {
		street: string,
		suite: string,
		city: string,
		zipcode: string,
		geo: {
			lat: string,
			lng: string
		}
	},
	phone: string,
	website: string,
	company: {
		name: string,
		catchPhrase: string,
		bs: string
	}
};