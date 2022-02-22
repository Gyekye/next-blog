// @ts-ignore
// @ts-ignore
import {UilAngleRight, UilArrowRight} from '@iconscout/react-unicons';
import {PostProps as Post} from '@utils/interfaces/post';
import Image from 'next/image';
import {FunctionComponent} from 'react';

export const NormalPostCard: FunctionComponent<Post> = ({post}): JSX.Element => {
	return (
		<>
			<article className={`h-[27rem] my-10 flex bg-transparent rounded-lg z-10`} >
				<div className={`w-7/12 h-full p-5`} >
					<p className={`text-primary pb-4 font-medium capitalize text-opacity-70 
					hover:text-primaryDark hover:text-opacity-100 hover:cursor-pointer transition-all duration-150 delay-75 ease-linear`}
					>
						{post.category}
					</p >
					<h2 className={`text-4xl font-semibold pb-4`} >{post.title}</h2 >
					<div className={`flex w-full items-center pb-4`} >
						<div className={`w-10 h-10 relative mr-4`} >
							<Image
								className={`rounded-[50%] object-fill object-center`}
								src={post.author.profile_image!}
								alt={post.author.first_name}
								layout={`fill`}
								quality={100}
							/>
						</div >
						<div className={`flex flex-col`} >
							<p className={`text-sm font-medium text-primary opacity-90 `} >
								{post.author.first_name} {post.author.last_name}
							</p >
							<p className={`text-xs font-medium text-link opacity-90 capitalize `} >
								{post.category} writer
							</p >
						</div >
					</div >
					<p className={`text-md text-black text-opacity-90 pb-2`} >
						{post.summary}
					</p >
					<a href={`/${post.id}`}
					   className={'w-fit py-4 text-opacity-80 group flex capitalize font-medium text-md text-primary ' +
						   'transition-all duration-100 ease-linear delay-75  ' +
						   'hover:text-primaryDark'} >
						read more
						<div
							className={'transition-all duration-100 delay-75 ease-linear group-hover:invisible group-hover:text-white'} >
							<UilAngleRight />
						</div >
						<div
							className={'-translate-x-[31px] opacity-0 transition-all duration-100 delay-100 ease-linear group-hover:-translate-x-6 group-hover:opacity-100'} >
							<UilArrowRight />
						</div >
					</a >
				</div >
				<div className={`w-5/12 h-full shadow-2xl  rounded-md relative`} >
					<Image
						className={`object-contain object-center rounded-md shadow-2xl`}
						src={post.image!}
						alt={post.title}
						layout={`fill`}
					/>
				</div >
			</article >
		</>
	);
};