import { getPages } from "../../sanity/sanity-utils";

const URL = "https://casting.niccitopping.com";

export default async function sitemap() {
  const pages = await getPages();

  const routes = [""].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const pages1 = pages.map(({ slug }) => ({
    url: `${URL}/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...pages1];
}
