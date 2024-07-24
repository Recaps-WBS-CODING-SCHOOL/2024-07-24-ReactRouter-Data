export const starsLoader = async () => {
  const res = await fetch('https://stars-api-8vmk.onrender.com/stars');
  if (res.status !== 200) throw Error('something went wrong');
  const data = await res.json();
  return data;
};
