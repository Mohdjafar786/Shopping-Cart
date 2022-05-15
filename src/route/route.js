const express = require('express');
const router = express.Router();

const UserController = require('../controller/userController');
const ProductController = require('../controller/productController');
const CartController = require('../controller/cartController');
const AuthMiddleware = require('../middleware/authMiddleware');
const OrderController = require('../controller/orderController');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/user/:userId/profile', AuthMiddleware.authenticate, AuthMiddleware.authorisation, UserController.getUserProfile);
router.put('/user/:userId/profile', AuthMiddleware.authenticate, AuthMiddleware.authorisation, UserController.updateUserProfile);

router.post('/products', ProductController.createProduct);
router.get('/products', ProductController.getProudcts); 
router.get('/products/:productId', ProductController.getProductById);
router.put('/products/:productId', ProductController.updateProductById);
router.delete('/products/:productId', ProductController.deleteProductById);


router.post('/users/:userId/cart',AuthMiddleware.authenticate, AuthMiddleware.authorisation, CartController.createCart);
router.put('/users/:userId/cart', AuthMiddleware.authenticate, AuthMiddleware.authorisation, CartController.updateCart);
router.get('/users/:userId/cart', AuthMiddleware.authenticate, AuthMiddleware.authorisation, CartController.getCart);
router.delete('/users/:userId/cart', AuthMiddleware.authenticate, AuthMiddleware.authorisation, CartController.deleteCart);


router.post('/users/:userId/orders', AuthMiddleware.authenticate, AuthMiddleware.authorisation, OrderController.createOrder);
router.put('/users/:userId/orders', AuthMiddleware.authenticate, AuthMiddleware.authorisation, OrderController.updateOrder);

module.exports = router; 