import Server from './server/index.js';

const port = 8080;

const app = new Server(port);
app.start();
