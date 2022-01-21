import models from '../../models/index.js';
import AppException from '../../exceptions/AppException.js';

class ProductsController {
  async getProduct(req, res) {
    try {
      const product = await models.products.findById(req.params.id);
      res.status(202).json({
        status: 'success',
        data: {
          product,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async getProducts(req, res) {
    try {
      const products = await models.products.find();
      res.status(202).json({
        status: 'success',
        data: {
          products,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async createProduct(req, res) {
    try {
      const newproduct = await models.products.create(req.body);
      res.status(202).json({
        status: 'success',
        data: {
          product: newproduct,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async updateProduct(req, res) {
    try {
      const products = await models.products.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      res.status(202).json({
        status: 'success',
        data: {
          products,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async deleteProduct(req, res) {
    try {
      const products = await models.products.findByIdAndDelete(req.params.id);

      res.status(202).json({
        status: 'success',
        data: {
          products,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }
}

export default new ProductsController();
