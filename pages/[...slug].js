import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Widget from "../components/widget";
import { getBrandByUrl, getAllBrands } from "../lib/api";

export default function Artist({
  content: { title, biography, image, imageCredits },
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`Content page for ${title}`} />
      </Head>
      <div
        data-theme={`${title}`.toLowerCase()}
        className={`mx-auto flex p-6 bg-gray-200 mt-10 rounded-lg shadow-xl`}
      >
        <div className="ml-6 pt-1">
          <h1 className="text-2xl text-primary leading-tight font-title font-bold">
            {title}
          </h1>
          <div
            className="text-primary"
            dangerouslySetInnerHTML={{
              __html: biography,
            }}
          />
          <Widget />

          <Link href="/" className="underline p-4 mt-5">
            Go back
          </Link>

          <Image
            src={image.src}
            width="480"
            height="320"
            alt={imageCredits}
            quality="70"
            className="mt-5"
          />
          <p>{imageCredits}</p>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const content = await getBrandByUrl(urlArrayToString(params.slug));
  return {
    props: { content },
  };
}

export async function getStaticPaths() {
  const brands = await getAllBrands();
  const paths = brands.map(({ url }) => ({
    params: {
      slug: urlStringToArray(url),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

const urlArrayToString = (url) => `/${url.join("/")}/`;
const urlStringToArray = (url) => url.split("/").filter((urlPart) => urlPart);
