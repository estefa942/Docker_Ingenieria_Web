const { Router } = require('express');
const controller = require('./controller');

const router = new Router();

/**
 * @swagger
 * 
 * definitions:
 *  User:
 *      type: object
 *      required:
 *          - name
 *          - lastname
 *          - document
 *          - phone
 *          - email
 *      properties:
 *          name:
 *              type: string
 *          lastname:
 *              type: string
 *          document:
 *              type: number
 *          phone:
 *              type: number
 *          email:
 *              type: string
 *  NewUser:
 *      allOf:
 *          - properties:
 *              _id:
 *                  type: string
 *          - $ref: '#/definitions/User'
 *          - properties:
 *              __v:
 *                  type: integer
 */

/**
* @swagger
* 
* /users:
*     get:
*         description: "Returns all users"
*         produces:
*             - application/json
*         responses:
*             200:
*                 description: "All users retrieved"
*                 schema:
*                     type: array
*                     items: 
*                         $ref: '#/definitions/NewUser'
*             500:
*                 description: "Internal server error"
*                 schema:
*                     type: object
*                     properties:
*                         message:
*                             type: string
*/
  router.route('/')
  .get((req, res) => controller.getUsers(req, res));
/**
  * @swagger
  * 
  * /users/:id:
  *     get:
  *         description: "Returns a user by id"
  *         produces:
  *             - application/json
  *         parameters:
  *         - name: id
  *           in: path
  *           description: "User identification" 
  *           required: true
  *           type: "string"
  *         responses:
  *             200:
  *                 description: "User retrieved"
  *                 schema: 
  *                     $ref: '#/definitions/NewUser'
  *             500:
  *                 description: "Internal server error"
  *                 schema:
  *                     type: object
  *                     properties:
  *                         message:
  *                             type: string
  */
  router.route('/:id')
  .get((req, res) => controller.getUserById(req, res));
/**
  * @swagger
  * 
  * /users:
  *     post:
  *         description: "Create a new user"
  *         produces:
  *             - application/json
  *         parameters:
  *         - name: body
  *           in: "body"
  *           required: true
  *           description: "Fields to create a user"
  *           schema:
  *             $ref: "#/definitions/User"
  *         responses:
  *             201:
  *                 description: "User created"
  *                 schema: 
  *                     $ref: '#/definitions/NewUser'
  *             400:
  *                 description: "Not found"
  *                 schema:
  *                     type: object
  *                     properties:
  *                         message:
  *                             type: string
  *             500:
  *                 description: "Internal server error"
  *                 schema:
  *                     type: object
  *                     properties:
  *                         message:
  *                             type: string
  */
  router.route('/')
  .post((req, res) => controller.createUser(req, res));
/**
  * @swagger
  * 
  * /users/:id:
  *     put:
  *         description: "Update a user by id"
  *         produces:
  *             - application/json
  *         parameters:
  *         - name: id
  *           in: path
  *           description: "User identification" 
  *           required: true
  *           type: "string"
  *         - name: body
  *           in: "body"
  *           description: "Fields to update"
  *           schema:
  *             $ref: "#/definitions/User"
  *         responses:
  *             200:
  *                 description: "User updated"
  *                 schema: 
  *                     $ref: '#/definitions/NewUser'
  *             500:
  *                 description: "Can not update user or internal server error"
  *                 schema:
  *                     type: object
  *                     properties:
  *                         message:
  *                             type: string
  */
  router.route('/:id')
  .put((req, res) => controller.updateUser(req, res));
/**
  * @swagger
  * 
  * /users/:id:
  *     delete:
  *         description: "Delete a user by id"
  *         produces:
  *             - application/json
  *         parameters:
  *         - name: id
  *           in: path
  *           description: "User identification" 
  *           required: true
  *           type: "string"
  *         responses:
  *             200:
  *                 description: "User deleted"
  *                 schema: 
  *                     $ref: '#/definitions/NewUser'
  *             500:
  *                 description: "Internal server error"
  *                 schema:
  *                     type: object
  *                     properties:
  *                         message:
  *                             type: string
  */
  router.route('/:id')
  .delete((req, res) => controller.deleteUser(req, res));


module.exports = router;
