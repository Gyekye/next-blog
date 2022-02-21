import {FC} from 'react';

export const Footer: FC = (): JSX.Element => {
	return (
		<footer className={`hidden lg:w-full lg:block lg:bg-footer`} >
			<div className={`flex lg:py-24 justify-evenly`} >
				<div className={`py-8 text-link`} >
					<p className={`text-lg text-secondary uppercase font-semibold pb-4`} >Support</p >
					<ul >
						<li className={'pb-2'} >Help Center</li >
						<li className={'pb-2'} >Safety Information</li >
						<li className={'pb-2'} >COVID Response</li >
						<li className={'pb-2'} >Accessibility</li >
					</ul >
				</div >
				<div className={`py-8 text-link`} >
					<p className={`text-lg text-secondary uppercase font-semibold pb-4`} >Community</p >
					<ul >
						<li className={'pb-2'} >Slack Channel</li >
						<li className={'pb-2'} >HANA: Disaster Relief Team</li >
						<li className={'pb-2'} >Resources</li >
						<li className={'pb-2'} >Contributors</li >
					</ul >
				</div >
				<div className={`py-8 text-link`} >
					<p className={`text-lg text-secondary uppercase font-semibold pb-4`} >Hosting</p >
					<ul >
						<li className={'pb-2'} >Try Vercel</li >
						<li className={'pb-2'} >Website Information</li >
						<li className={'pb-2'} >Server Status</li >
						<li className={'pb-2'} >Monthly Requests</li >
					</ul >
				</div >
				<div className={`py-8 text-link`} >
					<p className={`text-lg text-secondary uppercase font-semibold pb-4`} >About</p >
					<ul >
						<li className={'pb-2'} >Company</li >
						<li className={'pb-2'} >Newsroom</li >
						<li className={'pb-2'} >Careers</li >
						<li className={'pb-2'} >Learn new features</li >
					</ul >
				</div >
			</div >
		</footer >
	);
};