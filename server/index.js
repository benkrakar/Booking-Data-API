import express from 'express';

class Server {
  constructor(port) {
    this.port = port;
    this.app = express();
  }

  start() {
    this._listen();
  }

  _listen() {
    this.app.listen(this.port, () => {
      console.log(`App is running on port ${this.port}`);
    });
  }
}

export default Server;
