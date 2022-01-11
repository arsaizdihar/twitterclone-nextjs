export const isExpired = (exp: number) => {
  return Date.now() >= exp * 1000;
};
