const db = require('mongoose');

db.Promise = global.Promise;

//const uri = '';

async function connect(uri){
    await db.connect(uri, {
        useNewUrlParser: true,
    })
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(err => console.error('[db]', err));
}

module.exports = connect;