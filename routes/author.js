const dbops=require("../database/dbops")
const express = require("express")
const route = express.Router()

route.post("/store",function(request,response){
const data=
    {
     author_id:request.body.author_id,
     name:request.body.name,
     
    }
   dbops.insert(data.author_id,data.name,function(err,data){
       if(err)
         response.status(500).send("Unable to insert")
       else
         response.send("data Successfully inserted")
   })
})


route.get("/report",function(request,response){
  dbops.getAuthor(function(err,data){
             if(err)
                response.send("Unable to load data")
             else
                response.render("author",{Author:data,programmer:"udhay"})
  })
})

module.exports = route;