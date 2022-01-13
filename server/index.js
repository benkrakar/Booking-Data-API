import express from 'express';
import Router from '../router/index.js';

class Server {
  constructor(port) {
    this.port = port;
    this.router = Router;
    this.app = express();
  }

  start() {
    this._setupRoutes();
    this._listen();
  }

  _setupRoutes() {
    this.router.create(this.app);
  }

  _listen() {
    this.app.listen(this.port, () => {
      console.log(`App is running on port ${this.port}`);
    });
  }
}

export default Server;
