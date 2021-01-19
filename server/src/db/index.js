import JSONdb from 'simple-json-db';
import path from 'path';
import url from 'url';
import fs from 'fs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const userDBPath = `${__dirname}/data/users.json`;
const noteDBPath = `${__dirname}/data/notes.json`;

export function initDB() {
  [userDBPath, noteDBPath].forEach(dbPath => {
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(dbPath, '{}');
    }
  });
}

const users = new JSONdb(userDBPath);
const notes = new JSONdb(noteDBPath);

export default {
  users,
  notes
}
