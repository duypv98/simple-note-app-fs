import express from 'express';
import cors from 'cors';

import routers from './routers/index.js';
import { handleAPIError, handleInvalidRouteError } from './middlewares/errorHandlers.js'
import { initDB } from './db/index.js';

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.json());

app.use(routers);

app.use(handleAPIError);

app.use(handleInvalidRouteError);

app.listen(PORT, () => {
  initDB();
  console.log(`Server is running at http://localhost:${PORT}`);
});
