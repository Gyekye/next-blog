import {NextPage} from 'next';
import useSWR, {SWRResponse} from 'swr';
import {Product} from '../../utils/types';


const Products: NextPage = (): JSX.Element => {

	//* Client Side Data fetching with SWR
	//? https://swr.vercel.app/
	//? Create a fetcher function that will be called whenever the data is needed.

	const fetcher = (url: string) => fetch(url).then((r) => r.json());

	//? Data returns a product array, error is string
	const {
		data,
		error
	}: SWRResponse<Product[], string> = useSWR('http://localhost:3000/products', fetcher, {refreshInterval: 1000});

	if (!data) return <div >loading...</div >;

	return (
		<>
			{
				error && <div >Failed to load</div >
			}
			{
				data &&
				<div >
					{data.map((product: Product) =>
						<div key={product.id} >
							<p >{product.name} - {product.price}</p
							><br />
						</div >
					)}
				</div >
			}
		</>
	);

};

export default Products;