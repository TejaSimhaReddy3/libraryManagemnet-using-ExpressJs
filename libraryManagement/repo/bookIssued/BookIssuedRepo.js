const dbConnect = require('../../../dbConnection/dbConnection');

class BookIssuedRepositor{
    getDetails(request,callback){
        let getQuery = 'SELECT * FROM books_issued;'
        new Promise((resolve,reject) => {
            dbConnect.query(getQuery,(error,issuedSuccess) => {
                if(error){
                    callback(error)
                }
                callback(null,issuedSuccess)
                resolve(issuedSuccess)
            })
        })
    }
    postBooks(request,callback){
        // const bodyItem = {r_id:request.body.r_id,ISBN:request.body.ISBN,date_of_issue:request.body.date_of_issue,issued_staff_id:request.body.issued_staff_id}
        const requestParams = request.params.id;
        let postQuery = `UPDATE book_details SET books_count = books_count - ${1} where ISBN = '${requestParams}'`;
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
        const requestBody = {r_id:request.body.r_id,ISBN:requestParams,date_of_issue:currDate,issued_staff_id:request.body.issued_staff_id}
        let insertQuery = `INSERT into books_issued SET ?`
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

module.exports = BookIssuedRepositor