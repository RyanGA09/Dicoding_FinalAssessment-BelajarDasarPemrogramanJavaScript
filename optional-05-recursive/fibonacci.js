function fibonacci(n) {
  if (n === 0) {
    return 0; // Bases: elemen pertama Fibonacci adalah 0
  } else if (n === 1) {
    return 1; // Bases: elemen kedua Fibonacci adalah 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive: F(n) = F(n-1) + F(n-2)
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
