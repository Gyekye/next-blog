import featuredPostImage from '@public/post-image/post-4.png';
import {motion} from 'framer-motion';

import Image from 'next/image';
import {FC} from 'react';

export const Main: FC = (): JSX.Element => {

	const heroTextVariants = {
		initialState: {y: 200},
		animatedState: {y: 0}
	};
	const imageTextVariants = {
		initialState: {y: -200},
		animatedState: {y: 0}
	};

	const transition = {
		duration: 0.9,
		type: 'spring',
		stiffness: 150
	};

	return (
		<section
			className={`hidden lg:block lg:w-full lg:h-[58rem] lg:flex lg:bg-primary`} >
			<div className={`w-full flex mx-36`} >
				<motion.div initial={'initialState'} animate={'animatedState'} variants={heroTextVariants}
				            transition={transition}
				            className={`group w-3/6 h-full flex flex-col justify-center text-left `} >
					<p className={`text-7xl whitespace-normal text-opacity-80 text-white font-semibold 
					group-hover:text-opacity-100 group-hover:cursor-default transition-all duration-200 ease-linear delay-150`} >

						<span className={`font-extrabold text-white`} >HA</span >
						<span className={`font-extrabold text-secondaryLight`} >NA</span >, the blog for web developers.
					</p >
					<p className={`text-xl w-5/6 whitespace-normal py-8 text-opacity-70 text-white 
					group-hover:text-opacity-100 group-hover:cursor-default transition-all duration-200 ease-linear delay-150`} >
						Read posts and learn the latest modern technologies to build amazing web experiences for
						everyone.
					</p >
					<div >
						<button className={`px-24 flex items-center text-lg rounded-3xl text-white text-opacity-70 
						group-hover:text-opacity-100
						 font-medium appearance-none py-2.5 bg-secondary transition-all duration-100 ease-linear delay-75 
						 hover:scale-105 hover:bg-secondaryLight`} >
							<span className={`mr-2`} >Start Now</span >
						</button >
					</div >
				</motion.div >
				<motion.div variants={imageTextVariants} initial={'initialState'} animate={'animatedState'}
				            transition={transition}
				            className={`w-3/6 h-full flex items-center justify-end ml-4`} >
					<Image
						src={featuredPostImage}
						alt={'Main Post'}
						priority
					/>
				</motion.div >
			</div >
		</section >
	);
};