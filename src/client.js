import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '6qwk9c9b',
  apiVersion: '2021-03-25',
  dataset: 'production',
  useCdn: true,
});
