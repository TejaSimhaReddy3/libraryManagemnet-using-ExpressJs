const apiResponse = require('../../../util/apiResponse')

class AuthenticationController{
    async getStaff(request,response){
        return global.libAuthServices.getStaff(request,response)
        .then((data) => {
            response.status(200).send(data);
        })
        .catch((error) => {
            response.status(404).send("Can't get the details")
        })
    }
    async post(request,response){
        return global.libAuthServices.post(request,response)
        .then((data) => {
            apiResponse.postSuccessMessage(response,data)
        })
        .catch((error) => {
            response.status(404).send("Can't add staff")
        })
    }
    async login(request,response){
        return global.libAuthServices.login(request,response)
        .then((data) => {
            response.status(200).json(data)
        })
        .catch((error) => {
            response.status(404).send("Can't get the JWT Token, check the code/headers")
        })
    }
}

module.exports = AuthenticationController;