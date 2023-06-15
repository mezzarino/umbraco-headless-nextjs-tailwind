import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { getCountriesOverviewPage } from '../lib/api';
import Widget from '../components/widget';

export default function Home({ content, brands }) {
  return (
    <>
      <Head>
        <title>{content.title}</title>
      </Head>

      <div data-theme="travelex" className="mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-primary leading-tight font-title">
        {content.title}
        </h1>
        <Widget />
        <div>
        {brands.map(({ id, url, title }) => (
          <div key={id}>
            <Link href={url}>
                <div>
                  <h2>{title}</h2>
                </div>
            </Link>
          </div>
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
    props: { ...data }
  };
}