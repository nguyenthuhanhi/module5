function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var sum = 0;
for (var i = 0; i < 10; i++) {
    sum += fibonacci(i);
}
console.log(sum);
