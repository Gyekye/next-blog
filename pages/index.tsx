import {Header} from '@/components/header';
import {Featured} from '@/components/Hero/featured';
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
			<Featured />
		</motion.div >
	);
};

//* Export page
export default Index;