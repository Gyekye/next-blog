import {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next';
import Link from 'next/link';

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

//? InferGetStaticPropsType< type of getStaticProps > infers types for your props
const Users: NextPage = ({users}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	return (
		<>
			<h1 > List of users on th app </h1 >
			{
				users.map(
					(user: User) => {
						return (
							<div key={user.id} style={{border: '1px solid green'}} >
								<h1 >{user.username}</h1 >
								<h2 >{user.email}</h2 >
								<h3 >{user.phone}</h3 >
								<p >{user.username}</p >
								<p >{user.name} says {user.company.catchPhrase}</p >
								<Link href={`/users/${user.id}`} passHref={true}>
									<button >View more</button >
								</Link >
							</div >
						);
					}
				)
			}
		</>
	);
};

//* Using getStaticProps to fetch data from https://jsonplaceholder.typicode.com/users
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async () => {

	// Call an external API endpoint to get users.
	// You can use any data fetching library
	const response: Response = await fetch('https://jsonplaceholder.typicode.com/users');
	const users: User[] = await response.json();

	// By returning { props: { users } }, the Blog component
	// will receive `users` as a prop at build time
	return {
		props: {
			users,
			message: 'Hello World'
		},
		revalidate: 1
	};
};

//! Export Users Page
export default Users;

