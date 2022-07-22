const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors')
const bodyParser = require('body-parser');
const socket = require('./socket')
const router = require('./network/routes')
const db = require('./db');


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
socket.connect(server);
//app.use(router);
// app.use('/', function(req, res){
//     res.send('Hola');
// });

router(app);


app.use('/app', express.static('public'));

server.listen(3000, function(){
    console.log('La aplicacion esta escuchando en el http://localhost:3000')
});



