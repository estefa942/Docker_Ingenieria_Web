/**
 * Router import
 */
const { Router } = require('express');

const router = new Router();

/**
 * References to the other routers of each resource
 */
const users = require('./components/user/route');

/**
 * Paths defined to each resource
 */
router.use('/users', users);

module.exports = router;
