const apiResponse = require('../../../util/apiResponse');

class UserController{
    async getBooks(request,response){
        return global.bookDetailsServices.getBooks(request,response)
        .then((data) => {
            // console.log(data)
            // apiResponse.successMessage(response,data)
            response.status(200).send(data);
        })
        .catch((error) => {
            apiResponse.notFoundError(response,error)
        })
    }
    async deleteBooks(request,response){
        return global.bookDetailsServices.deleteBooks(request,response)
        .then((data) => {
            // console.log(data)
            apiResponse.successDelMessage(response,data)
        })
        .catch((error) => {
            apiResponse.notFoundError(response,"Data Can't be deleted")
        })
    }
    async addBooks(request,response){
        return (global.bookDetailsServices.addBooks(request,response))
        .then((data) => {
            response.status(200).json(data);
        })
        .catch((error) => {
            apiResponse.notFoundError(response,"Data Can't be added")
        })
    }
    async updateBook(request,response){
        return (global.bookDetailsServices.updateBook(request,response))
        .then((data) => {
            // console.log(data)
            apiResponse.updateSuccessMessage(response,data)
        })
        .catch((error) => {
            apiResponse.notFoundError(response,"Data Can't be updated")
        })
    }
}

module.exports = UserController;