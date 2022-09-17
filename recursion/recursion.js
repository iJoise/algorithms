const factorial = (num) => {
  if (num === 1) return 1
  return num * factorial(num - 1)
}

console.log(factorial(5));

const fibonacci = (num) => {
  if (num <= 1) return num
  return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(7));
