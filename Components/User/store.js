const { getQueryHandlerAndSelector } = require('puppeteer');
const Model = require ('./model');

function addUser(user){
    const myUser = new Model(user)
    return myUser.save()
};

async function getUser(){
    return user = await Model.find();    
};


module.exports= {
    add: addUser,
    list: getUser,
}