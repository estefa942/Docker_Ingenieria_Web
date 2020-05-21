const { Router } = require('express');
const controller = require('./controller');

const router = new Router();
/**
 * @swagger
 * /users:
 *   get:
 *     description: Returns all users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: A successful response
 *         
 */
  router.route('/')
  .get((req, res) => controller.getUsers(req, res));
/**
 * @swagger
 * /users/:id:
 *   get:
 *     description: Returns user by id
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: A successful response
 *         
 */
  router.route('/:id')
  .get((req, res) => controller.getUserById(req, res));
/**
 * @swagger
 *
 * /users:
 *   post:
 *     description: Update a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User name
 *         in:  query
 *         required: true
 *         schema:
 *           type: string
 *       - lastname: user
 *         description: User lastname
 *         in:  query
 *         required: true
 *         schema:
 *           type: string
 *       - document: user
 *         description: User document
 *         in:  query
 *         required: true
 *         schema:
 *           type: number
 *      - phone: user
 *         description: User phone
 *         in:  query
 *         required: true
 *         schema:
 *           type: number
 *      - email: user
 *         description: User email
 *         in:  query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A successful response
 *         
 */
  router.route('/')
  .post((req, res) => controller.createUser(req, res));
/**
 * @swagger
 *
 * /users/:id:
 *   put:
 *     description: Update a user by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User name
 *         in:  query
 *         required: true
 *         schema:
 *           type: string
 *       - lastname: user
 *         description: User lastname
 *         in:  query
 *         required: true
 *         schema:
 *           type: string
 *       - document: user
 *         description: User document
 *         in:  query
 *         required: true
 *         schema:
 *           type: number
 *      - phone: user
 *         description: User phone
 *         in:  query
 *         required: true
 *         schema:
 *           type: number
 *      - email: user
 *         description: User email
 *         in:  query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A successful response
 *         
 */
  router.route('/:id')
  .put((req, res) => controller.updateUser(req, res));
/**
 * @swagger
 * /users/:id:
 *   delete:
 *     description: Delete user by id
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: A successful response
 *         
 */
  router.route('/:id')
  .delete((req, res) => controller.deleteUser(req, res));


module.exports = router;
