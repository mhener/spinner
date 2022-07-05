const string = '|/-\\|/-\\|';
const spinner = function(str) {
  let timeOut = 500;
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(`\r${char}`);
    }, timeOut += 500);
  }
  setTimeout(() => {
    process.stdout.write(`\n`);
  }, 5000);
};

spinner(string);
