const { reject } = require('bcrypt/promises');
const dbConnect = require('../../../dbConnection/dbConnection');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const apiResponse = require('../../../util/apiResponse');

class LibAuthRepo{
    getStaff(request,callback){
        let getQuery = `SELECT * FROM lib_authentication`
                new Promise((resolve,reject) => {
                    dbConnect.query(getQuery,(error,row) => {
                        if(error){
                            callback(error)
                        }
                        callback(null,row)
                        resolve(row)
                    })
                })
    }

    //  for generating hashed pwd
    async post(request,callback){
        const hashedPwd = await bcrypt.hash(request.body.password,5);
        console.log(hashedPwd.length)
        const selectQuery = `SELECT * FROM lib_authentication where mobile_number = ${request.body.mobile_number}`;
        dbConnect.query(selectQuery,(error,existingUser) => {
            if(existingUser.length == 0){
                let bodyItem = {mobile_number:request.body.mobile_number,email:request.body.email,password:hashedPwd};
                let postQuery = `INSERT Into lib_authentication SET ?`;
                new Promise((resolve,reject) => {
                    dbConnect.query(postQuery,bodyItem,(error,row) => {
                        if(error){
                            callback(error)
                        }
                        callback(null,row)
                        resolve(row)
                    })
                })
            }else{
                callback("User Already Exists")
            }
        })
    }

    async login(request,callback){
        const getQuery = `SELECT * FROM lib_authentication where mobile_number = '${request.body.mobile_number}'`;
        await dbConnect.query(getQuery,async(error,result)=>{
            if(result.length == 0){
                console.log("Invalid User")
            }
            else{
                const isPwdMatched = await bcrypt.compare(request.body.password, result[0].password);
                if(isPwdMatched === true){
                    const payload = {
                        mobile_number: request.body.mobile_number
                    }
                    // console.log(payload,"Done with Payload")
                    const jwtToken = jwt.sign(payload,"teja1955");
                    console.log(jwtToken)
                    callback(null,jwtToken)
                }
                callback('Invalid Login')
            }
        })
    }
}

module.exports = LibAuthRepo;