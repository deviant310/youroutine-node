namespace Command {
  export type CommandConstructor = {
    new() : Command;
  }
  
  export type Command = {
    run(...args: any): void;
  }
}

export = Command;