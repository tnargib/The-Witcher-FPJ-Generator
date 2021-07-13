const getRandomInt = (max) => {
  return Math.floor(Math.random() * max) + 1;
};
export const coin = () => Math.random() < 0.5;
export const d4 = () => getRandomInt(4);
export const d6 = () => getRandomInt(6);
export const d10 = () => getRandomInt(10);

