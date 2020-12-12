const commands = require.context('commands', false, /\.ts$/);

class Console {
  static runCommand(command: string, options: object) {
    const run = commands(`./${command}.ts`).default;
    return run(options);
  }
}

export default Console;