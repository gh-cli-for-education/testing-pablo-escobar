let r = 1;
function factorial(n) {
  for (let j = 1; j <= n; j++) {
    r *= j;
  }
  return r;
}






function main() {
  console.log(factorial(5));
}

main();
