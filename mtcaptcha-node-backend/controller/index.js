//const MTCaptchaLib = require('mtcaptcha-nodejs-sdk');
//const MTCaptchaConfig = require('.././config/config.json');
const MTCaptchaLib = require('../../node_modules/mtcaptcha-nodejs-sdk/lib/MTCaptchaLib').MTCaptchaLib;
const MTCaptchaConfig = require('.././config/config.json');



exports.demoValidateToken = function (req, res) {
    const mtcapInstance = new MTCaptchaLib(MTCaptchaConfig['MTCAPTCHA_PRIVATE_KEY']);
    mtcapInstance.validateTokenDetail(req.body['mtcaptcha-verifiedtoken'], function (tokenValidationResponse) {
        console.log(tokenValidationResponse);
        return res.send(tokenValidationResponse);
    });
}
