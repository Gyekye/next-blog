import {NextPage} from "next";
import Link from "next/link";

//* A next page that returns a jsx element
const Index:NextPage = ( ): JSX.Element =>{
  return(
      <section>
        <Link href={'/blog'} >
          <a>
            Blog
          </a>
        </Link>
        <Link href={'/products'} >
          <a>
            Products
          </a>
        </Link>
      </section>
  );
}

//* Export page
export default Index;