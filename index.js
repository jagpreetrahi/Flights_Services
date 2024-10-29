const express = require('express');

const {ServerConfig , Logger} = require('./config');
const app = express();  // to define the routing using method of express server object

const apiRoutes = require('./routes');


app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.use('/api' , apiRoutes)

app.listen( ServerConfig.PORT ,() => {
    console.log(`Successfully run server on PORT: ${ServerConfig.PORT}`);
    Logger.info({message : "Something went wrong"})
})