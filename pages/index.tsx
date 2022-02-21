import {Header} from '@/components/header';
import {End} from '@/components/Hero/end';
import {Main} from '@/components/Hero/main';
import {Flipped} from '@/components/Hero/flipped';
import {Normal} from '@/components/Hero/normal';
import {motion} from 'framer-motion';
import {NextPage} from 'next';

//* A next page that returns a jsx element
const Index: NextPage = (): JSX.Element => {
	const variants = {
		hidden: {opacity: 0},
		visible: {opacity: 1},
	};
	return (
		<motion.div
			animate={'visible'} variants={variants} initial={'hidden'}
			transition={{ease: 'linear', duration: .5}}
		>
			<Header />
			<Main />
			<Normal feature={{image:'', description:''}} />
			<Flipped feature={{image:'', description:''}} />
			<Normal feature={{image:'', description:''}} />
			<End />
		</motion.div >
	);
};

//* Export page
export default Index;