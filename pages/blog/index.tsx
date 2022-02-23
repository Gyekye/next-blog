import {Footer} from '@/components/footer';
import {FeaturedPostCard} from '@/components/post/featuredPostCard';
import {NormalPostCard} from '@/components/post/normalPostCard';
import Logo from '@public/svg/logo-2.svg';
import {Post} from '@utils/types/post';
import {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Blog: NextPage = ({
	                        posts,
	                        firstFeaturedPost,
	                        noFeaturedPost
                        }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	return (
		<>
			<div className={`bg-background flex flex-col items-center justify-center`} >
				<div className={`w-7/12 flex flex-col border-x border-x-border border-dashed`} >
					<nav className={`w-full flex justify-between  border-b border-b-border border-dashed`} >
						<div className={`flex items-center px-4`} >
							<Image src={Logo} alt={'Logo'} />
						</div >
						<ul className={'py-6 px-8 flex items-center border-x border-x-border border-dashed'} >
							<li className={`pl-8 text-black font-medium transition duration-200 delay-150 ease-linear 
					hover:text-black hover:cursor-pointer hover:text-opacity-100 text-md capitalize text-opacity-70`}
							>
								Products
							</li >
							<li className={`pl-10 text-black font-medium transition duration-200 delay-150 ease-linear 
					hover:text-black hover:cursor-pointer hover:text-opacity-100 text-md capitalize text-opacity-70`}
							>
								<Link href={`blog/`} >
									<a >
										Use cases
									</a >
								</Link >
							</li >
							<li className={`px-10 text-black font-medium transition duration-200 delay-150 ease-linear 
					hover:text-black hover:cursor-pointer hover:text-opacity-100 text-md capitalize text-opacity-70`}
							>
								Developers
							</li >
							<li className={`pr-10 text-black font-medium transition duration-200 delay-150 ease-linear 
					hover:text-black hover:cursor-pointer hover:text-opacity-100 text-md capitalize text-opacity-70`}
							>
								Company
							</li >
						</ul >
						<div className={`flex items-center justify-end px-4`} >
							<button className={`px-4 flex items-center text-sm rounded-3xl text-white
						 font-medium appearance-none py-2 bg-primary transition-all duration-100 ease-linear delay-75 
						 hover:scale-105`} >
								Sign In
							</button >
						</div >
					</nav >
					{
						!noFeaturedPost ? <FeaturedPostCard post={firstFeaturedPost} /> : <p >No Featured Post</p >
					}
					{
						//* Renders post details if post data exist.
						posts ? posts.map(
								(item: Post) => {
									return (
										<NormalPostCard key={item.id} post={item} />
									);
								}
								//* Else render no post TODO: replace with better UI.
							) :
							<p >No post</p >
					}
				</div >
				<Footer />
			</div >
		</>
	);
};


export const getStaticProps: GetStaticProps = async () => {

	//* Makes an api call to json-server to retrieve list of posts.
	const response: Response = await fetch('  https://smart-vampirebat-0.loca.lt/posts');
	const posts: Post[] = await response.json();

	//* Filters post array for featured post.
	const featuredPost: Post[] = posts.filter(
		(item: Post) => item.is_featured
	);

	if (featuredPost.length > 0) {
		//* Then selects the first post item in the array.
		const firstFeaturedPost = featuredPost[ 0 ];
		return {
			props: {

				//* Returns post as a prop to be passed into the Blog page.
				posts,
				firstFeaturedPost
			},
			//* ISR, revalidate props data every 2 seconds
			revalidate: 1
		};

	} else {
		//* If no featured Post exist return posts and a not notFound flag.
		return {
			props: {
				posts,
				noFeaturedPost: true
			},
			//* ISR, revalidate props data every 2 seconds
			revalidate: 1
		};
	}
};

//! Exports Page
export default Blog;