const apiResponse = require('../../../util/apiResponse');

class PublisherDetailsController{
    async get(request,response){
        return global.publisherDetailsServices.get(request,response)
        .then((data) => {
            response.status(200).json(data)
        })
        .catch((error) => {
            response.status(404).send("Can't get the publisherDetails")
        })
    }
    async post(request,response){
        return global.publisherDetailsServices.post(request,response)
        .then((data) => {
            apiResponse.postSuccessMessage(response,data)
        })
        .catch((error) => {
            response.status(404).send("Can't Add the publisherDetails")
        })
    }
    async put(request,response){
        return global.publisherDetailsServices.put(request,response)
        .then((data) => {
            apiResponse.updateSuccessMessage(response,data)
        })
        .catch((error) => {
            response.status(404).send("Can't update details")
        })
    }
}

module.exports = PublisherDetailsController;