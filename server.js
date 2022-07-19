const express = require('express')
const app = express();
const dotenv = require('dotenv');
const exp = require('constants');
const cors = require('cors')
dotenv.config()


app.set('views', __dirname + '/views/')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(__dirname + '/public'))
app.use(cors())


app.get('/', (request, response) => {
    response.sendFile(__dirname + 'index.html')
})



app.listen(3000, function(){
    console.log('listening on 3000')
})