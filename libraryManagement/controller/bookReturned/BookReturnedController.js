const apiResponse = require('../../../util/apiResponse');

class BookReturnedController{
    async getDetails(request,response){
        return global.bookReturnedService.getDetails(request,response)
        .then((data) => {
            response.status(200).json(data)
        })
        .catch((error) => {
            response.status(404).send("Can't get the Returned Books")
        })
    }
    async postBooks(request,response){
        return global.bookReturnedService.postBooks(request,response)
        .then((data) => {
            apiResponse.postSuccessMessage(response,data)
        })
        .catch((error) => {
            response.status(404).send("Can't add the returned_books")
        })
    }
}

module.exports = BookReturnedController;