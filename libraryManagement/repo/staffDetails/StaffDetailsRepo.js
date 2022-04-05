const dbConnect = require('../../../dbConnection/dbConnection');

class StaffDetailsRepository{
    get(request,callback){
        let getQuery = `SELECT * FROM staff_details;`
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
        let bodyItem = {staff_id:request.body.staff_id,name:request.body.name,assigned_student_id:request.body.assigned_student_id,mobile_number:request.body.mobile_number}

        let postQuery = `INSERT INTO staff_details SET ?`;
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
    update(request,callback){
        let nameItem = request.body.name

        let paramItem = request.params.id
        let updateQuery = `UPDATE staff_details SET name="${nameItem}" where staff_id = ${paramItem}`;
        new Promise((resolve,reject) => {
            dbConnect.query(updateQuery,(error,staffDet) => {
                if(error){
                    callback(error)
                }
                callback(null,staffDet)
                resolve(staffDet)
            })
        })
    }
    delete(request,callback){
        let paramItem = request.params.id;
        let delQuery = `DELETE from staff_details where staff_id = ${paramItem}`
        new Promise((resolve,reject) => {
            dbConnect.query(delQuery,(error,staffDet) => {
                if(error){
                    callback(error)
                }
                callback(null,staffDet);
                resolve(staffDet)
            })
        })
    }
}

module.exports = StaffDetailsRepository;