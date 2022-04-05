const apiResponse = require('../../../util/apiResponse');

class ReaderDetailsController{
    async get(request,response){
        return global.readerDetailsServices.get(request,response)
        .then((data) => {
            response.status(200).json(data);
        })
        .catch((err) => {
            response.status(404).send("Can't get the details")
        })
    }
    async post(request,response){
        return global.readerDetailsServices.post(request,response)
        .then((data) => {
            apiResponse.postSuccessMessage(response,data)
        })
        .catch((err) => {
            response.status(404).send("Can't add the Reader_Details")
        })
    }
}

module.exports = ReaderDetailsController;