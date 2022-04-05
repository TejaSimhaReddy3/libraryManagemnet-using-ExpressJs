const jwt = require('jsonwebtoken');
const dbConnect = require('../dbConnection/dbConnection');
const apiResponse = require('../util/apiResponse');

const libAuthentication = async (request,response,next) => {
    try{
        let jwtToken;
        const authenticateHeader = request.headers["authorization"];
        // console.log(authenticateHeader)
        if(authenticateHeader !== undefined){
            jwtToken = authenticateHeader.split(" ")[1];
        }
        if(jwtToken === undefined){
            apiResponse.unAuthMessage(jwtToken)
        }
        else{
            jwt.verify(jwtToken,"teja1953",async(error,payload) => {
                if(error){
                    apiResponse.unAuthMessage(error)
                }
                request.mobile_number = payload.mobile_number;
                console.log("Inside Middleware");
                next()
            })
        }
    }
    catch{
        console.log('In  Middleware Error');
    }
}

module.exports = libAuthentication