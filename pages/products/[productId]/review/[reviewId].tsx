import {NextPage} from "next";
import {NextRouter, useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";

const ReviewId: NextPage = ( ): JSX.Element =>{
    //* useRouter Hook
    const router:NextRouter = useRouter();

    //* Get and destructure the router query.
    //? when destructuring, typescript implicitly assigns the type any to the variables.
    const { reviewId, productId }: ParsedUrlQuery = router.query;

    // console.log( typeof( reviewId ) );

    // Render UI
    return (
      <p> Review for product { productId } </p>
    );
}

export default ReviewId;