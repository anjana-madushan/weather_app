export function getCityLocalTime(timezoneOffsetInSeconds) {
  const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
  const cityTime = new Date(utc + timezoneOffsetInSeconds * 1000);
  return cityTime.toLocaleTimeString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}
