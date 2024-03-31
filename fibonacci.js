function fibs(n) {
  let result = [0, 1];

  for (let i = 3; i <= n; i++) {
    result.push(result[i - 2] + result[i - 3]);
  }

  return result;
}
console.log("Fibonacci[Loop]", fibs(8));

function fibsRec(n, initialSequence) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const sequence = initialSequence || [0, 1];
  if (sequence.length >= n) return sequence;

  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);

  return fibsRec(n, sequence);
}
console.log("Fibonacci[Recursive]", fibsRec(9));
