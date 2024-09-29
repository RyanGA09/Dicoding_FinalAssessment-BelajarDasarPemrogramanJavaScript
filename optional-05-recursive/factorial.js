function factorial(n) {
  if (n === 0) {
    return 1; // faktorial Bases , 0! = 1
  } else {
    return n * factorial(n - 1); // Recursive: n * (n-1)!
  }
}

// Jangan hapus kode di bawah ini!
export default factorial;
