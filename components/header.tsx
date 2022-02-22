//* Header component
import {FC} from 'react';
import Image from 'next/image';
import Logo from '@public/svg/logo.svg';
import Link from 'next/link';

export const Header: FC = (): JSX.Element => {
	return (
		<>
			<header className={`hidden lg:block lg:bg-primary lg:py-4 
		lg:transition-all duration-200 ease-linear lg:shadow-lg lg:shadow-primary/40`}
			>
				<nav className={'flex justify-between items-center mx-20'} >
					<div className={''} >
						<Image src={Logo} alt={'Logo'} />
					</div >
					<ul className={'flex'} >
						<li className={`px-4 font-medium text-white transition duration-200 delay-150 ease-linear 
					hover:text-black hover:cursor-pointer hover:text-secondary text-md uppercase text-opacity-60`}
						>
							Featured Posts
						</li >
						<li className={`px-4 font-medium text-white transition duration-200 delay-150 ease-linear 
					hover:text-black hover:cursor-pointer hover:text-secondary text-md uppercase text-opacity-60`}
						>
						<Link href={`blog/`}>
							<a>
								Blog
							</a>
						</Link>
						</li >
						<li className={`px-4 font-medium text-white transition duration-200 delay-150 ease-linear 
					hover:text-black hover:cursor-pointer hover:text-secondary text-md uppercase text-opacity-60`}
						>
							Account
						</li >
						<li className={`pl-4 font-medium text-white transition duration-200 delay-150 ease-linear 
					hover:text-black hover:cursor-pointer hover:text-secondary text-md uppercase text-opacity-60`}
						>
							Sign In
						</li >
					</ul >
				</nav >
			</header >
		</>
	);
};