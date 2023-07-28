function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum += fibonacci(i);
}
console.log(sum);
