function delay(ms = 0): Promise<any> {
  return new Promise((res, rej) =>
    setTimeout(() => {
      res(true);
    }, ms)
  );
}

export { delay };
