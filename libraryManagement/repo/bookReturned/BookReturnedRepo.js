const dbConnect = require('../../../dbConnection/dbConnection');

class BookReturnedRepo{
    getDetails(request,callback){
        let getQuery = 'select * from books_returned'
        new Promise((resolve,reject) => {
            dbConnect.query(getQuery,(error,returnedSuccess) => {
                if(error){
                    callback(error)
                }
                callback(null,returnedSuccess)
                resolve(returnedSuccess)
            })
        })
    }
    postBooks(request,callback){
        // const bodyItem = {r_id:request.body.r_id,ISBN:request.body.ISBN,date_of_issue:request.body.date_of_issue,issued_staff_id:request.body.issued_staff_id}
        const requestParams = request.params.id
        // console.log(requestParams)
        let postQuery = `UPDATE book_details SET books_count = books_count + ${1} where ISBN = '${requestParams}'`;
        new Promise((resolve,reject) => {
            dbConnect.query(postQuery,(error,updateSuccess) => {
                if(error){
                    callback(error)
                }
                callback(null,updateSuccess)
                resolve(updateSuccess)
            })
        })
        const currDate = new Date()
        const requestBody = {r_id:request.body.r_id,ISBN:requestParams,date:currDate,returned_to_staff:request.body.returned_to_staff}
        console.log(requestBody)
        let insertQuery = `INSERT into books_returned SET ?`
        new Promise((resolve,reject) => {
            dbConnect.query(insertQuery,requestBody,(error,updatePost) => {
                if(error){
                    callback(error)
                }
                callback(null,updatePost)
                resolve(updatePost)
            })
        })
    }
}

module.exports = BookReturnedRepo;
