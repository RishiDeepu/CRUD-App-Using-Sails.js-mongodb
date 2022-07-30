/**
 * CategoriesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async create(req, res) {
        let dto = req.body;
        let data = await Categories.create(dto)
        return res.ok(data)

    }


};

