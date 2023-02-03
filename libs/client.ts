// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'kyaru99',
  apiKey: process.env.API_KEY!,
});
