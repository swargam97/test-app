const path=require('path')
const express=require('express');
const bodyParser = require('body-parser');
const hbs=require('hbs');
require('./db/mongoose')
const multer=require('multer')
const User= require('./models/user')

const app=express();
const port=process.env.PORT || 3000
const publicPath=path.join(__dirname,'../public');
app.set('view engine','hbs')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static(publicPath));


const upload=multer({
    // dest:'images'
})
app.get('',(req,res)=>
{
    res.render('index');
    // console.log(req.body)
})
app.post('',upload.single('upload'),(req,res)=>
{
    const buffer1=req.file.buffer
    req.body['file']=buffer1
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })

})

app.listen(port,()=>{
    // console.log("Server is running succesfully");
})