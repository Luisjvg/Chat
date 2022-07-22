const express = require('express');
const multer = require('multer')

const router = express.Router();
const response = require('../../network/response')
const controller = require('./controller')

const upload = multer({
    dest: 'public/files/',
})


router.get('/', function(req, res){
    const filterMessage = req.query.user || null;
    controller.getMessage(filterMessage)
        .then((messageList) => {
            response.succes(req, res, messageList, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        })
});

router.post('/', upload.single('file'), function(req, res){
    
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage) => {
            response.succes(req, res, fullMessage, 201)
        })
        .catch(error => {
            response.error(req, res, 'Informacion invalida', 400, 'Error para logear')
        })
});
router.patch('/:id', function(req, res){
    //console.log(req.params.id);

    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.succes(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        })

})
router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id)
    .then(() =>{
        response.succes(req, res, `Mensaje ${req.params.id} eliminado`, 200)
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e)
    })
})


module.exports = router;