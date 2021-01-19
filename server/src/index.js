import express from 'express';
import cors from 'cors';

import apis from './apis/index.js';
import { handleAPIError, handleInvalidRouteError } from './middlewares/errorHandlers.js'

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.json());

app.use(apis);

app.use(handleAPIError);

app.use(handleInvalidRouteError);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
