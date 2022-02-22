export interface PostProps {
	post: {
		id: number,
		title: string,
		summary:string,
		image: string | undefined,
		body: string,
		category: string,
		is_featured: boolean,
		author: {
			profile_image: string | undefined,
			first_name: string,
			last_name: string
		}
	};
}
