import {Footer} from '@/components/footer';
import {Header} from '@/components/header';
import {End} from '@/components/hero/end';
import {Flipped} from '@/components/hero/flipped';
import {Main} from '@/components/hero/main';
import {Normal} from '@/components/hero/normal';
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
			<Normal feature={{image: '', description: ''}} />
			<Flipped feature={{image: '', description: ''}} />
			<Normal feature={{image: '', description: ''}} />
			<End />
			<Footer />
		</motion.div >
	);
};

//* Export page
export default Index;