import "dotenv/config";

const fetcher = async (endpoint) => {
  const result = await fetch(`https://cdn.umbraco.io/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      "umb-project-alias": process.env.UMB_PROJECT_ALIAS,
      "Accept-Language": "en-GB",
      "Api-Key": process.env.UMB_API_KEY,
    },
  });

  return await result.json();
};

export async function getCountriesOverviewPage() {
  const result = await fetcher(`content`);
  const root = result._embedded.content[0];
  const brands = await getAllBrands();

  return {
    content: {
      title: root.title,
      text: root.text,
    },
    brands,
  };
}

export async function getAllBrands() {
  const result = await fetcher(`content/type?contentType=artist`);
  const content = result._embedded.content;

  return content.map((brand) => ({
    id: brand._id,
    url: brand._url,
    title: brand.name,
    image: brand.image,
    imageCredits: brand.imageCredits,
  }));
}

export async function getBrandByUrl(url) {
  const content = await fetcher(`content/url?url=${url}`);

  return {
    title: content.name,
    biography: content.biography,
    image: content.image,
    imageCredits: content.imageCredits,
  };
}
