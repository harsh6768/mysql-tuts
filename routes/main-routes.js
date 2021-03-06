const Router=require('express').Router();
const jsonController=require('../controller/json-controller');


Router.route('/insert-json').post(jsonController.insertJson);
Router.route('/get-all-json').get(jsonController.getJsonData);
Router.route('/get-city').get(jsonController.getCityName);
Router.route('/get-phone').get(jsonController.getPhoneNumber);

module.exports=Router;
