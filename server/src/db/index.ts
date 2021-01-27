import JSONdb from 'simple-json-db';
import fs from 'fs';

const userDBPath: string = `${__dirname}/data/users.json`;
const noteDBPath: string = `${__dirname}/data/notes.json`;

export function initDB(): void {
  [userDBPath, noteDBPath].forEach((dbPath: string) => {
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(dbPath, '{}');
    }
  });
}

const users: JSONdb = new JSONdb(userDBPath);
const notes: JSONdb = new JSONdb(noteDBPath);

export default {
  users,
  notes
}
