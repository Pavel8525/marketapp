const parseNumber = (value: string): string => {
  const isNumber = /^\d+$/.test(value);
  return isNumber ? value : value.replace(/[A-Za-zа-яА-Я]/g, "");
};

export default parseNumber;
