import express, { Application, json, Router } from 'express';
import cors from 'cors';

import { handleAPIError, handleInvalidRouteError } from './middlewares/errorHandlers';
import routes from './routers';

class Server {
  private _port: number;
  public app: Application;

  constructor({ port }: { port: number }) {
    this._port = port;
    this.app = express();
  }

  public get port(): number {
    return this._port;
  }

  public set port(port: number) {
    this._port = port;
  }

  config() {
    this.app.use(cors({ origin: '*' }));
    this.app.use(json());
  }

  useRoute() {
    this.app.use(routes);
  }

  useErrorHandlers() {
    this.app.use(handleAPIError);
    this.app.use(handleInvalidRouteError);
  }

  public init() {
    this.config();
    this.useRoute();
    this.useErrorHandlers();
  }

  public listen(callback?: (() => void)) {
    this.app.listen(this._port, callback);
  }
}

export default Server;
