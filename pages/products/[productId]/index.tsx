import {NextPage} from "next";
import {NextRouter, useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";

const ProductDetails: NextPage = ( ): JSX.Element =>{
    // useRouter Hook
    const router: NextRouter = useRouter();

    //* Product ID can either be a string, an empty string array or undefined
    const productId: string | string[] | undefined = router.query.productId;

    // Route Query has type ParsedQuery
    let routeQuery:ParsedUrlQuery = router.query;

    // Render UI
    return (
        <p>Product Details for product { productId } </p>
    );
}

export default ProductDetails;