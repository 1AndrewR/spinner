const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;

for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200;
}