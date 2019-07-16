process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
  let input = process.stdin.read();
  if (input !== null) {
    // process.stdout.write(input);

    let userCommand = input.toString().trim();
    switch (userCommand) {
      case '/exit':
        process.stdout.write('Quiting the app!\n');
        process.exit();
      case '/node-v':
        process.stdout.write(
          `NODE Version: ${process.env.TERM_PROGRAM_VERSION}\n`
        );
        process.exit();
      case '/system-l':
        process.stdout.write(
          `Lang: ${process.env.LC_ALL ||
            process.env.LC_MESSAGES ||
            process.env.LANG ||
            process.env.LANGUAGE}\n`
        );
        process.exit();
      default:
        process.stderr.write('Wrong command!\n');
    }
  }
});
