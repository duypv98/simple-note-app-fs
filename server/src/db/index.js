import JSONdb from 'simple-json-db';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const users = new JSONdb(`${__dirname}/data/users.json`);
const notes = new JSONdb(`${__dirname}/data/notes.json`);

export default {
  users,
  notes
}
