const { del } = require('express/lib/application');
const dbConnect = require('../../../dbConnection/dbConnection');

class BooksRepository{
    getBooks(request,callback){
        let getQuery = 'SELECT * from book_details'
        new Promise((resolve,reject) => {
            dbConnect.query(getQuery,(error,row)=>{
                if(error){
                    callback(error)
                }
                // console.log("Repo",row)
                callback(null,row)
                // console.log(JSON.parse(JSON.stringify(row[0].title)))
                resolve(row)
            })
        })
    }
    deleteBooks(request,callback){
        let paramItem = request.params.id
        let delQuery = `DELETE from book_details where ISBN = "${paramItem}"`
        new Promise((resolve,reject) => {
            dbConnect.query(delQuery,(error,row) => {
                if(error){
                    callback(error)
                }
                // console.log(row,"delRepo")
                callback(null,row)
                resolve(row)
            })
        })
    }
    addBooks(request,callback){
        let bodyItem = {ISBN:request.body.ISBN,title:request.body.title,edition:request.body.edition,category:request.body.category,price:request.body.price,publisher_id:request.body.publisher_id,books_count:request.body.books_count};
        // console.log(bodyItem)
        let postQuery = `INSERT into book_details SET ?`;
        new Promise((resolve,reject) => {
            dbConnect.query(postQuery,bodyItem,(error,row) => {
                if(error){
                    callback(error)
                }
                callback(null,row)
                resolve(row)
            })
        })
    }
    updateBook(request,callback){
        let bodyItem = request.body.category
        // console.log(bodyItem)
        let paramItem = request.params.id
        // console.log(paramItem)
        let updateQuery = `UPDATE book_details SET category = '${bodyItem}' WHERE ISBN = '${paramItem}'`
        new Promise((resolve,reject) => {
            dbConnect.query(updateQuery,(error,row) => {
                if(error){
                    callback(error)
                }
                callback(null,row)
                resolve(row)
            })
        })
    }
}

module.exports = BooksRepository;