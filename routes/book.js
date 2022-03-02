const dbops=require("../database/dpops1")
const express = require("express")
const route = express.Router()

route.post("/store",function(request,response){
const data=
    {
     book_no:request.body.book_name,
     book_name:request.body.book_name,
     category:request.body.category,
     price:request.body.price,
     pages:request.body.pages
     
    }
   dbops.insert(data.sno,data.name,data.category,data.price,data.pages,function(err,data){
       if(err)
         response.status(500).send("Unable to insert")
       else
         response.send("data Successfully inserted")
   })
})


route.get("/report",function(request,response){
  dbops.getBook(function(err,data){
             if(err)
                response.send("Unable to load data")
             else
                response.render("book",{Book:data,programmer:"udhay"})
  })
})


module.exports = route;



module.exports = route;