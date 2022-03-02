const connection=require("./dbconfig")

operations ={
    insert: function(book_no,book_name,category,price,pages,callback){
        connection.query("insert into book values(?,?,?,?,?)",
        [book_no,book_name,category,price,pages],
        callback)
    },
        

    getBook: function(callback){
        connection.query("select * from book",callback)
    }
}

     

module.exports = operations;