const express=require("express")
const app  = express()
const path =require("path")
const author =require('./routes/author')
const book =require('./routes/book')

//const authapi= require('./orm/routes')


app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/author",author)

app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine', 'pug')


app.use("/book",book)


//app.use("/authapi",authapi)
app.use(express.static(path.join(__dirname,"public/styles")))
app.use(express.static(path.join(__dirname,"public/script")))
app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"public/index.html"))
})


app.get("/",function(request,response){
    response.send("Hello!!! Node js is running...")
})

app.listen("8000",function(){
    console.log("server started in port number 8000")
})