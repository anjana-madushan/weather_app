//generate random ttl values between 0.5 min to 5 min
export const addTTls = () => {
  const minTTL = 30000;
  const maxTTL = 300000;
  const step = 5000;

  return Math.floor(Math.random() * ((maxTTL - minTTL) / step + 1)) * step + minTTL
}