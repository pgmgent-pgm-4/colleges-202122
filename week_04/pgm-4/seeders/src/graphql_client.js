import { AwesomeGraphQLClient } from 'awesome-graphql-client';
import fetch from 'node-fetch';

import settings from './config/settings';

console.log(settings);

const client = new AwesomeGraphQLClient({
  endpoint: settings.CRAPHCMS_CONTENT_API,
  fetch,
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${settings.GRAPHCMS_ACCESS_TOKENS}`
    }
  }
});

export default client;