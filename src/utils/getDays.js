export default function (date) {
  const now = new Date();
  const stamp = new Date(date);
  const diff = Math.abs(stamp.getTime() - now.getTime());
  const days = Math.ceil(diff / (1000 * 3600 * 24));
  return days === 1 ? 'a day' : `${days} days`;
}
