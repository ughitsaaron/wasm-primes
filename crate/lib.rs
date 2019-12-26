use wasm_bindgen::prelude::*;

// #[wasm_bindgen]
// extern "C" {
//   // Use `js_namespace` here to bind `console.log(..)` instead of just
//   // `log(..)`
//   #[wasm_bindgen(js_namespace = console)]
//   fn log(s: &str);

//   // The `console.log` is quite polymorphic, so we can bind it with multiple
//   // signatures. Note that we need to use `js_name` to ensure we always call
//   // `log` in JS.
//   #[wasm_bindgen(js_namespace = console, js_name = log)]
//   fn log_u32(a: u32);

//   // Multiple arguments too!
//   #[wasm_bindgen(js_namespace = console, js_name = log)]
//   fn log_many(a: &str, b: &str);
// }

fn is_prime(n: usize) -> bool {
  if n % 2 == 0 || n % 3 == 0 {
    return false;
  }

  let mut i = 5;
  while (i * i + 1) < n {
    if n % i == 0 {
      return false;
    }

    i += 1;
  }

  n > 1
}

#[wasm_bindgen]
pub fn primes_lt(n: usize) -> Vec<usize> {
  let mut primes = Vec::new();

  for i in 2..n {
    if is_prime(i) {
      primes.push(i);
    }
  }

  primes
}
