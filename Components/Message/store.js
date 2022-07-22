const { populate } = require('./model');
const Model = require('./model');

function addMessage(message){
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(filterUser){
    return new Promise ((resolve, reject) => {
        let filter = {};
        if(filterUser !== null){
            filter = { user: filterUser };
        }
        Model.find(filter)
            .populate('chat')
            .exec((error, populated) =>{
                if(error){
                    return reject(error);
                }
                resolve(populated)
            });
    });
}

async function updateText(id, message){
    const foundMessage = await Model.findById(id);
    foundMessage.message = message;

    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id){
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage,
}