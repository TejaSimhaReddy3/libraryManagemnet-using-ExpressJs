const dbConnect = require('../../../dbConnection/dbConnection');

class ReaderDetailsRepository{
    get(request,callback){
        let getQuery = `SELECT * FROM reader;`
        new Promise((resolve,reject) => {
            dbConnect.query(getQuery,(err,staffDet) => {
                if(err){
                    callback(err)
                }
                callback(null,staffDet)
                resolve(staffDet)
            })
        })
    }
    post(request,callback){
        let bodyItem = {r_id:request.body.r_id,mail_id:request.body.mail_id,first_name:request.body.first_name,last_name:request.body.last_name,mobile_num:request.body.mobile_num,address:request.body.address}

        let postQuery = `INSERT INTO reader SET ?`;
        new Promise((resolve,reject) => {
            dbConnect.query(postQuery,bodyItem,(error,staffDet) => {
                if(error){
                    callback(error)
                }
                callback(null,staffDet)
                resolve(staffDet)
            })
        })
    }
}

module.exports = ReaderDetailsRepository;