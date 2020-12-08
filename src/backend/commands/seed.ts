import { Command } from "types/command";
import DB from 'db';

class Seed implements Command {
  async run(){
    const db = await DB();

    await db.query(`
      insert into notes
        (title, description)
      values
        ('Заметка 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed urna vel nulla varius congue. Nunc tempor efficitur egestas. Fusce sapien purus, porta pellentesque luctus non, facilisis nec ante. Nunc laoreet magna vel tempor elementum. Duis finibus lectus at mauris malesuada, nec blandit neque aliquam. Quisque urna dui, eleifend eget nisi vel, aliquam rhoncus odio. Integer tempor, dui eu molestie aliquam, eros nulla pharetra leo, quis consectetur orci orci id mi. Donec id nulla mi.'),
        ('Заметка 2', 'Duis finibus lectus at mauris malesuada, nec blandit neque aliquam. Quisque urna dui, eleifend eget nisi vel, aliquam rhoncus odio. Integer tempor, dui eu molestie aliquam, eros nulla pharetra leo, quis consectetur orci orci id mi. Donec id nulla mi.'),
        ('Заметка 3', 'Quisque urna dui, eleifend eget nisi vel, aliquam rhoncus odio. Integer tempor, dui eu molestie aliquam, eros nulla pharetra leo, quis consectetur orci orci id mi. Donec id nulla mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed urna vel nulla varius congue. Nunc tempor efficitur egestas. Fusce sapien purus, porta pellentesque luctus non, facilisis nec ante. Nunc laoreet magna vel tempor elementum. Duis finibus lectus at mauris malesuada, nec blandit neque aliquam.')
    `);
  }
}

export default Seed;