const dbConnect = require('../../../dbConnection/dbConnection');

class PublisherDetailsRepository{
    get(request,callback){
        let getQuery = 'SELECT * FROM publisher_details;'
        new Promise((resolve,reject) => {
            dbConnect.query(getQuery,(error,getPub) => {
                if(error){
                    callback(error)
                }
                callback(null,getPub)
                resolve(getPub)
            })
        })
    }
    post(request,callback){
        let bodyItem = {publisher_id:request.body.publisher_id,publisher_name:request.body.publisher_name,year_of_publication:request.body.year_of_publication}
        let postQuery = `INSERT INTO publisher_details SET ?`
        new Promise((resolve,reject) => {
            dbConnect.query(postQuery,bodyItem,(error,postPub) => {
                if(error){
                    callback(error)
                }
                callback(null,postPub)
                resolve(postPub)
            })
        })
    }
    put(request,callback){
        let bodyItem = request.body.publisher_name;
        let paramItem = request.params.id;
        let updateQuery = `UPDATE publisher_details SET publisher_name = '${bodyItem}' where publisher_id = ${paramItem};`
        new Promise((resolve,reject) => {
            dbConnect.query(updateQuery,(error,putPub) => {
                if(error){
                    callback(error)
                }
                callback(null,putPub)
                resolve(putPub)
            })
        })
    }
}

module.exports = PublisherDetailsRepository;