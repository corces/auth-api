
const  express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT_EXPRESS || 8080;
const dbConnect = require('./config/database');
const cors = require('cors');

app.use(cors({
   origin: 'http://localhost:3000', 
   credentials: true
}));

global.__root   = __dirname + '/'; 



mongoose.Promise = global.Promise;
mongoose.connect(dbConnect.db, {useNewUrlParser: true }).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)


var UserController = require(`${__root}/routes/User`);
app.use('/api/users', UserController);

var AuthController = require(`${__root}/routes/Auth`);
app.use('/api/auth', AuthController);




app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});