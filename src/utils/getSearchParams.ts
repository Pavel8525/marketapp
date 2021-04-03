const getUrlParams = (...params: string[]): (string | null)[] => {
  const urlSearchParam = new URLSearchParams(window.location.search);

  return params.map((param) => urlSearchParam.get(param));
};

export { getUrlParams };
