const service = require("../service/service");
const Service = new service();

exports.roman2decimal = async (req, res, next) => {
  try {
    const rpta = await Service.convertRoman(req.body.number);
    console.log('>>roman rpta: '+ JSON.stringify(rpta));
    res.status(201).json(rpta);
  } catch (err) {
    next(err);
  }
};
