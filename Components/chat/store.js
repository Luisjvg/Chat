const { getQueryHandlerAndSelector } = require('puppeteer');
const { populate } = require('./model');
const Model = require ('./model');

function addChat(chat){
    const chats = new Model(chat)
    return chats.save();
};

async function getChat(userId){
    return new Promise((resolve, reject) => {
        let filter = {};
        if(userId){
            filter = {
                users: userId,
            }
        }

        Model.find()
        .populate('users')
        .exec((err, populated) =>{
            if(err){
                return reject(err)
            }
            resolve(populated)
        });
    });
};


module.exports= {
    add: addChat,
    list: getChat,
}