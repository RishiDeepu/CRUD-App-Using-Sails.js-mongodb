const sailsHookOrm = require("sails-hook-orm");

module.exports = async function (req, res, proceed) {
    if (req.body.isUser == 'VENDOR_USER') {
        console.log("req.isUser", req.body.isUser);
        console.log("req", req.body);
        return proceed();
    }
    else {
        console.log("req.isUser", req.body.isUser);
        console.log("req", req.body);
        return res.forbidden();
    }
}