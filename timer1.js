let args = process.argv.slice(2);


for(elm of args) {
  if (elm > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, elm * 1000);
  }
}

