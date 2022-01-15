import express from 'express';
import Mongoose from 'mongoose';
import 'dotenv/config';
import Router from '../router/index.js';

class Server {
  constructor(port) {
    this.port = port;
    this.router = Router;
    this.mongoose = Mongoose;
    this.db = process.env.DATABASE_LOCAL;
    this.app = express();
  }

  start() {
    this._setupRoutes();
    this._setupConnection();
    this._listen();
  }

  _setupRoutes() {
    this.router.create(this.app);
  }

  _setupConnection() {
    this.mongoose
      .connect(this.db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log('connection 👌');
      });
  }

  _listen() {
    this.app.listen(this.port, () => {
      console.log(`App is running on port ${this.port}`);
    });
  }
}

export default Server;
