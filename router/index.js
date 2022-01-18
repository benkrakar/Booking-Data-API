import express from 'express';
import apiRoutes from './api/index.js';

class Router {
  constructor() {
    this.router = express.Router();
    this.apiRoutes = apiRoutes;
  }

  create(app) {
    this._attachMiddleware();
    this._attachApiRoutes();
    this._handlePageNotFound();
    app.use(this.router);
  }

  _attachMiddleware() {
    this.router.use(express.json());
    this.router.use(express.urlencoded({ extended: false }));
  }

  _handlePageNotFound() {
    this.router.all('*', (req, res) => {
      res.status(404).send('Page not found!');
    });
  }

  _attachApiRoutes() {
    this._attachRoutes(this.apiRoutes, '/api');
  }

  _attachRoutes(routeGroups, prefix = '') {
    routeGroups.forEach(({ group, routes }) => {
      routes.forEach(({ method, path, handler }) => {
        this.router[method](prefix + group.prefix + path, handler);
      });
    });
  }
}

export default new Router();
