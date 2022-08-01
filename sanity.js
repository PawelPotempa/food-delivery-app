import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Connection to the backend
// In a real-world scenario, the id should be an environment variable
const client = sanityClient({
  projectId: "utfluutl",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);

// Helper function to pull the source of images from the sanity client
export const urlFor = (source) => builder.image(source);

export default client;
