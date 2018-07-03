// var express=require('express')
// var react=require('react')
// var app=express()
// var path=require('path')
// var bodyParser=require('body-parser')
// var mongoose=require('mongoose')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// var schema=new mongoose.Schema({
// name:String,
// email:String,
// })
// var user =mongoose.model('user',schema) 
// mongoose.connect('mongodb://localhost/developer')
// app.use(express.static(path.resolve(__dirname,  '../dist')));
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname,  '../dist', 'index.html'));
// });
// app.post('/create',(req,res)=>{
//     user.create(req.body,(err,data)=>{
//         res.json(data)
//     })
// })
// app.post('/update',(req,res)=>{
//     user.findOneAndUpdate({"_id":"5b3a2072e939491ed4ad0bf2"},{name:"lochan"},(err,data)=>{
//         res.json(data)
//     })
// })
// app.get('/delete',(req,res)=>{
//     user.findByIdAndRemove({"_id":"5b3a2072e939491ed4ad0bf2"},(err,data)=>{
//         res.json(data)
//     })
// })
// app.listen(100,()=>console.log('sucess'))
// var express=require('express')
// var path=require('path')
// var bodyParser=require('body-parser')
// var mongoose=require('mongoose')
// var app=express()
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// var schema=new mongoose.Schema({
// firstname:String,
// place:String,
// })
// var ram =mongoose.model('ram',schema)
// mongoose.connect('mongodb://localhost/harangi')
// app.use(express.static(path.resolve(__dirname,  '../dist')));
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname,  '../dist', 'index.html'));
// })

// app.post('/create',(req,res)=>{
//     ram.create(req.body,(err,data)=>{
//         res.json(data)
//     })  
// })
// app.post('/update',(req,res)=>{
//     ram.findByIdAndUpdate({"_id":"5b3b14b87dbce10d08fc57c7"},{firstname:"ama"},(err,data)=>{
//         res.json(data)
//     })
// })
// app.get('/delete',(req,res)=>{
//     ram.findByIdAndRemove({"_id":"5b3b1d59e3ec440c7c3882d3"},(err,data)=>{
//    res.json(data)
//     })
// })
// app.listen(100,()=>console.log('sucess boss'))

// var dealer=mongoose.model('dealer',schema)
// mongoose.connect('mongodb://localhost/brand')
// app.use(express.static(path.resolve(__dirname,  '../dist')));
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname,  '../dist', 'index.html'));
// })
// app.post('/create',(req,res)=>{
//     dealer.create(req.body,(err,data)=>{
//         res.json(data)
//     })
// })
// app.post('/update',(req,res)=>{
//     dealer.findByIdAndUpdate({"_id":"5b3b3d8afa276e1f3017b85d"},{"_id":"5b3b3e44fa276e1f3017b85e"},(err,data)=>{
//         res.json(data)
//     })
// })
// app.get('/delete',(req,res)=>{
//     dealer.findByIdAndRemove({"_id":"5b3b3e44fa276e1f3017b85e"},(err,data)=>{
//         res.json(data)
//     })
//     })

// app.listen(100,()=>console.log('sucess'))var express=require('express')
var express=require('express')
var app=express()
var mongoose=require('mongoose')
var path=require('path')
var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var schema=new mongoose.Schema({
 firstName:String,
 phonenumber:String,
 password:String,
})
var page=mongoose.model('page',schema)
mongoose.connect('mongodb://localhost/form')
app.use(express.static(path.resolve(__dirname,  '../dist')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,  '../dist', 'index.html'));
})
app.post('/create',(req,res)=>{
    console.log(req.body)
    const{firstName,phonenumber,password}=req.body
page.create(req.body,(err,data)=>{
    res.json(data)
})
})
app.listen(100,()=>console.log('sucess boss'))
