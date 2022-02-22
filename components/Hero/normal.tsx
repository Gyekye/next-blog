// @ts-ignore
// @ts-ignore
import {UilAngleRight, UilArrowRight} from '@iconscout/react-unicons';
import featuredPostImage from '@public/post-image/feature-1.png';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {FC} from 'react';

//* interface for props
interface Props {
	feature: {
		image: string | undefined,
		description: string
	};
}

const initialState = {
	x:-300,
	opacity:0,
};

const InViewState = {
	x: 0,
	opacity: 1
};

const transition = {
	duration: 1,
	delay:.1,

};

export const Normal: FC<Props> = ({feature}): JSX.Element => {
	return (
		<section
			className={`hidden lg:block lg:w-full lg:h-[36rem] lg:flex justify-center items-center lg:bg-white`} >
			<div
				className={'w-8/12 h-full flex bg-white z-10 '} >
				<motion.div initial={initialState} whileInView={InViewState} transition={transition} className={'w-3/6 h-full p-6 bg-white flex flex-col justify-center'} >
					<h2 className={'w-11/12 text-4xl font-semibold pb-6'} >
						New Payment Links features to help you sell more, faster
					</h2 >
					<p className={'w-10/12 text-lg pb-4'} >
						Payment Links lets you create a payment page that you can share with your customers in just a
						few clicks—no code required. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, ea.
					</p >
					<a href={'#'}
					   className={'w-fit group flex uppercase font-medium text-md text-secondary ' +
						   'transition-all duration-100 ease-linear delay-75  ' +
						   'hover:text-primary'} >
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
				</motion.div >
				<div className={'w-3/6 h-full p-8 bg-white flex justify-center items-center'} >
					<Image
						src={featuredPostImage}
						alt={'Main Post'}
						priority
					/>
				</div >
			</div >
		</section >
	);
};