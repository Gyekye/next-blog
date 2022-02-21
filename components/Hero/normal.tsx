import {FC} from 'react';
//* interface for props
interface Props {
	feature:{
		image: string | undefined,
		description:string
	}
}

export const Normal: FC<Props> =  ({feature}): JSX.Element =>{
	return (
		<div>
			<p>Normal Article </p>
		</div>
	)
}