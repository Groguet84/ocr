
var exec = require('cordova/exec');

var PLUGIN_NAME = 'ocr';

var ocr = {
  saludo: function (name, successCallback, errorCallback){
        exec(successCallback, errorCallback, PLUGIN_NAME, "saludar", [name]);
  }
};

module.exports = ocr;
