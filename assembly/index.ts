declare function log(n: i32): void;

export function add_one(a: i32): i32 {
  log(a);
  return a + 1;
}

export function fizzbuzz(num: i32): string | null {
  if (num % 15 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return null;
}

memory.grow(2); // 2 x 64KB
store<u8>(0, 21);
store<u8>(1, 42);
store<u8>(2, 64);

export function readMemory(n: i32): i32 {
  return load<u8>(n);
}
