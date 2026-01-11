export const createItems = () => {
  return Array.from({ length: 26 }, (_, i) => ({
    name: String.fromCharCode(65 + i),
    value: Math.floor(Math.random() * 51),
  }));
};
