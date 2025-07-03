import NodeCache from "node-cache";

//cached data will automatically expire and be removed after 5 minutes.
const cache = new NodeCache({ stdTTL: 300 });

//get cache data by using key
export const getCacheData = (key) => {
  return cache.get(key);
}

//store the cache data under a specific key
export const setCacheData = (key, data) => {
  return cache.set(key, data);
}