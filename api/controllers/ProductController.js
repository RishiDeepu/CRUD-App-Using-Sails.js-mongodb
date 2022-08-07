/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async create(req, res) {
        try {
            console.log(req.body);
            console.log("all params", req.allParams());
            delete req.body.isUser;

            let product = await Product.create(req.body)
            // return res.ok(product)
            // console.log("product", product);

            let deletingData = await Product.find().sort([{ createdAt: 'DESC' }])
            console.log("deletingData", deletingData);
            return res.ok(deletingData[0])


        }
        catch (e) {
            return res.serverError(e)
        }

    },

    async listing(req, res) {
        try {
            sails.log("inside find")
            // let filter = Object.assign({}, req ? req : {})
            let data = await Product.find().populate('category');
            console.log("data", data);
            return res.ok(data);

        }
        catch (e) {
            return res.serverError(e)
        }

    },

    async view(req, res) {
        try {
            console.log("req", req.params.id);
            let data = await Product.findOne({ _id: req.params.id }).populate('category')
            console.log("data", data);
            return res.ok(data)

        }
        catch (e) {
            return res.serverError(e)
        }


    },
    async update(req, res) {
        let dto = req.body
        console.log("dto", dto);
        console.log("req.params", req.params);
        console.log("req.params.id", req.params.id);

        let updatedData = await Product.update({ _id: req.params.id }).set(dto)
        return res.ok(updatedData)
    },

    async delete(req, res) {
        try {
            let deletingData = await Product.findOne({ _id: req.params.id })
            console.log("deletingData", deletingData);
            let data = await Product.destroy({ _id: req.params.id })
            // return res.ok(data)
            return res.send(deletingData)

        } catch (e) {
            return res.serverError(e)
        }
    },
    async test() {

    }

};

