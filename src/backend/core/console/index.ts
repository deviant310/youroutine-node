const commands = require.context('commands', false, /\.ts$/);

export default function (command: string, options: object) {
  const run = commands(`./${command}.ts`).default;
  return run(options);
}