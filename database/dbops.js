const connection=require("./dbconfig")

operations ={
    insert: function(author_id,name,callback){
        connection.query("insert into author values(?,?)",
        [author_id,name],
        callback)
         },
        

        getAuthor: function(callback){
            connection.query("select * from author",callback)
        }
    }

     

module.exports = operations;