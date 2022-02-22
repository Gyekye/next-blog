import {FC} from 'react';

export const Footer: FC = (): JSX.Element => {
	return (
		<footer className={`hidden lg:w-full lg:block lg:bg-footer`} >
			<div className={`flex lg:py-24 justify-evenly`} >
				<div className={`py-8 text-link`} >
					<p className={`text-lg text-secondary uppercase font-semibold pb-4`} >Support</p >
					<ul >
						<li className={'pb-2 text-sm'} >Help Center</li >
						<li className={'pb-2 text-sm'} >Safety Information</li >
						<li className={'pb-2 text-sm'} >COVID Response</li >
						<li className={'pb-2 text-sm'} >Accessibility</li >
					</ul >
				</div >
				<div className={`py-8 text-link`} >
					<p className={`text-lg text-secondary uppercase font-semibold pb-4`} >Community</p >
					<ul >
						<li className={'pb-2 text-sm'} >Slack Channel</li >
						<li className={'pb-2 text-sm'} >HANA: Disaster Relief Team</li >
						<li className={'pb-2 text-sm'} >Resources</li >
						<li className={'pb-2 text-sm'} >Contributors</li >
					</ul >
				</div >
				<div className={`py-8 text-link`} >
					<p className={`text-lg text-secondary uppercase font-semibold pb-4`} >Hosting</p >
					<ul >
						<li className={'pb-2 text-sm'} >Try Vercel</li >
						<li className={'pb-2 text-sm'} >Website Information</li >
						<li className={'pb-2 text-sm'} >Server Status</li >
						<li className={'pb-2 text-sm'} >Monthly Requests</li >
					</ul >
				</div >
				<div className={`py-8 text-link`} >
					<p className={`text-lg text-secondary uppercase font-semibold pb-4`} >About</p >
					<ul >
						<li className={'pb-2 text-sm'} >Company</li >
						<li className={'pb-2 text-sm'} >Newsroom</li >
						<li className={'pb-2 text-sm'} >Careers</li >
						<li className={'pb-2 text-sm'} >Learn new features</li >
					</ul >
				</div >
			</div >
		</footer >
	);
};