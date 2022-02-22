import {FeaturedPostCard} from '@/components/post/featuredPostCard';
import {Post} from '@utils/types/post';
import {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next';

const Blog: NextPage = ({post}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	return (
		<>
			<div className={`w-screen bg-primaryBg flex justify-center`} >
				<div className={`w-6/12 flex  border-x-2 border-x-primaryLighter border-dashed`} >
					{
						//* Renders post details if post data exist
						post ? post.map(
								(item: Post) => {
									return (
										<FeaturedPostCard key={item.id} post={item} />
									);
								}
						//* Else render no post TODO: replace with better UI.
							) :
							<p >No post</p >
					}
				</div >
			</div >
		</>
	);
};


export const getStaticProps: GetStaticProps = async () => {

	//* Makes an api call to json-server to retrieve list of posts.
	const response: Response = await fetch('http://localhost:4000/posts?is_featured=true');
	const post: Post = await response.json();

	console.log(post);

	return {

		//* Returns post as a prop to be passed into the Blog page.
		props: {
			post
		},

		//* ISR, revalidate props data every 2 seconds
		revalidate: 2
	};
};

//! Exports Page
export default Blog;