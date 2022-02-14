import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage} from 'next';
import {User} from './index';

const User: NextPage = ({user}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {

	return (
		<>
			<div >
				<h2 > User Details</h2 >
				<p >{user.email}</p >
			</div >
		</>
	);
};


export const getStaticPaths: GetStaticPaths = async () => {

	//* Call an external API endpoint for the users Data
	const response: Response = await fetch('https://jsonplaceholder.typicode.com/users');
	const users: User[] = await response.json();

	//* Get the paths( ids ) we want to pre-render from each user Data
	const paths = users.map((user: User) => {
		//* Return a path object with user.id as params
		return {
			params: {
				//* Converts the user.id to a string
				userId: user.id.toString()
			}
		};
	});
	return {paths, fallback: 'blocking'};
};

export const getStaticProps: GetStaticProps = async ({params}) => {

	//* Pass the userId from params to fetch the user Data
	// @ts-ignore
	const response: Response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
	const user: User = await response.json();

	//* Return the user as props
	return {
		props: {
			//* Pass fetched Data Here
			//* Passed user data to the page component
			user
		}
	};
};

//! Export User Page
export default User;