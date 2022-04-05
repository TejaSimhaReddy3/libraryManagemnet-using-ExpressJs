const apiResponse = require('../../../util/apiResponse')

class BookIssuedController{
    async getDetails(request,response){
        return global.bookIssuedServices.getDetails(request,response)
        .then((data) => {
            response.status(200).json(data)
        })
        .catch((error) => {
            response.status(404).send("Can't get the details")
        })
    }
    async postBooks(request,response){
        return global.bookIssuedServices.postBooks(request,response)
        .then((data) => {
            apiResponse.postSuccessMessage(response,data)
        })
        .catch((error)=>{
            response.status(404).send("Can't add the data")
        })
    }
}

module.exports = BookIssuedController