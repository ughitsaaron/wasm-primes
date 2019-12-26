export const noop = () => {};

export const isPrime = (n: number) => {
  if (n > Number.MAX_SAFE_INTEGER) {
    throw Error(
      "The number provided exceeds the maximum safe integer in your browser"
    );
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i + 1 < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n === 2 || n > 1;
};

export const primesLt = (n: number) => {
  let primes = [];

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
};
