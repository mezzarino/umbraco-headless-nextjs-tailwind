import React from "react";

import Head from "next/head";
import Link from "next/link";
import { getCountriesOverviewPage } from "../lib/api";
import Widget from "../components/widget";

export default function Home({ content, brands }) {
  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta
          name="description"
          content={`Content page for ${content.title}`}
        />
      </Head>

      <div
        data-theme="travelex"
        className="mx-auto flex p-6 bg-gray-200 mt-10 rounded-lg shadow-xl"
      >
        <div className="ml-6 pt-1">
          <h1 className="text-2xl text-primary leading-tight font-title">
            {content.title}
          </h1>
          <Widget />
          <div className="mt-5">
            {brands.map(({ id, url, title }) => (
              <Link href={url} className="underline p-4" key={id}>
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await getCountriesOverviewPage();
  return {
    props: { ...data },
  };
}
