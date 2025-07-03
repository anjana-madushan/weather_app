export function UnixTimeConvert(unixTime) {
  if (!unixTime) return '--';

  const date = new Date(unixTime * 1000);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}
