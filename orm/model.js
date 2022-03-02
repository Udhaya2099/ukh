const Sequelize = require('sequelize');
var sequelize=require('./connection');

var author=sequelize.define('author',{
    author_id:{
      type: Sequelize.INTEGER,
      primaryKey:true
    },
    name:{
      type: Sequelize.TEXT,
      allowNull:false
    }
  
  });

  var books=sequelize.define('books',{
    book_id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    Category:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    price:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    pages:{
        type: Sequelize.TEXT,
        allowNull:false
    }
})


author.hasMany(books,{foreignKey: 'author_id'});
books.belongsTo(author,{foreignKey: 'author_id'});

author.sync({drop: false}).then(() => {
    
    console.log("author table Synched!!!");
  });

books.sync({ drop: false}).then(() => {
    
    console.log("books table Synched!!!");
  });


  module.exports={books:books,author:author};