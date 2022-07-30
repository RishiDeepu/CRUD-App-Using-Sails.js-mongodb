/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    'POST /create': 'ProductController.create',
    'GET /find': 'ProductController.listing',
    'GET /findOne/:id': 'ProductController.view',
    'PUT /update/:id': 'ProductController.update',
    'DELETE /delete/:id': 'ProductController.delete'


};
