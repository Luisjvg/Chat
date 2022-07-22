const express = require('express');
const router = express.Router();
const response = require('../../network/response')
const controller = require('./controller')

router.post('/', function(req, res){
    controller.addUser(req.body.name)
        .then(data => {
            response.succes(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500, e);
        })
});
router.get('/', function(req, res) {
    controller.getUser()
        .then((userList) =>{
            response.succes(req, res, userList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Invalid user', 400, e)
        })
})

module.exports = router;