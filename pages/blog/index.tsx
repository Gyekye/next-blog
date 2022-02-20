import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import {Post} from '../../utils/types';

const Index: NextPage = ({posts}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
	return (
		<>
			<h1 > Lists of Posts </h1 >
			{
				posts.map(
					(post: Post) => {
						return (
							<div key={post.id} >
								<h2 >{post.title}</h2 >
								<p >{post.author}</p >
							</div >
						);
					}
				)
			}
		</>
	);
};

//* Getting list of posts with getServerSideProps
export const getServerSideProps: GetServerSideProps = async () => {
	//? getStaticProps pre-renders HTML pages per request on the server then sends the generated HTML back as a response
	const response: Response = await fetch(' http://localhost:3000/posts/');
	const posts: Post[] = await response.json();

	return {
		//* Passes the posts list to the props object to be passed as a prop in the Index
		props: {
			posts
		}
	};
};
export default Index;