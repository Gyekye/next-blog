import featuredPostImage from '@public/post-image/end.png';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {FC} from 'react';


export const End: FC = (): JSX.Element => {
	const initialState = {
		y: -600,
		opacity: 0,
	};

	const InViewState = {
		y: 0,
		opacity: 1
	};

	const transition = {
		duration: 2,
		type: 'spring',
		stiffness: 250
	};


	return (
		<section
			className={`hidden lg:block lg:w-full lg:h-[39rem] lg:flex lg:bg-primaryLighter`} >
			<div className={`hero-with-bg w-full flex justify-center`} >
				<motion.div initial={initialState} whileInView={InViewState}
				            transition={transition}
				            className={`w-5/12 h-full flex items-center justify-end ml-4`} >
					<Image
						src={featuredPostImage}
						alt={'Main Post'}
						priority
					/>
				</motion.div >
				<motion.div initial={initialState} whileInView={InViewState}
				            transition={transition}
					className={`group w-4/12 h-full flex flex-col justify-center text-left `} >
					<p className={`text-4xl whitespace-normal text-primary font-semibold 
					group-hover:cursor-default transition-all duration-200 ease-linear delay-150`} >
						We share, you read and improve.
					</p >
					<p className={`text-xl w-5/6 whitespace-normal py-8 text-black 
					group-hover:cursor-default transition-all duration-200 ease-linear delay-150`} >
						Read posts and learn the latest modern technologies to build amazing web experiences for
						everyone.
					</p >
					<div >
						<button className={`px-24 flex items-center text-lg rounded-3xl text-white
						 font-medium appearance-none py-2.5 bg-primary text-white border border-primary transition-all duration-100 ease-linear delay-75 
						 hover:scale-105`} >
							Read our latest posts
						</button >
					</div >
				</motion.div >
			</div >
		</section >
	);
};