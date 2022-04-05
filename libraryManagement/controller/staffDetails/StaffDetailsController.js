const apiResponse = require('../../../util/apiResponse');

class StaffDetailsController{
    async get(request,response){
        return global.staffDetailsServices.get(request,response)
        .then((data) => {
            response.status(200).json(data);
        })
        .catch((err) => {
            response.status(404).send("Can't get the details")
        })
    }
    async post(request,response){
        return global.staffDetailsServices.post(request,response)
        .then((data) => {
            apiResponse.postSuccessMessage(response,data)
        })
        .catch((err) => {
            response.status(404).send("Can't add the staff")
        })
    }
    async update(request,response){
        return global.staffDetailsServices.update(request,response)
        .then((data) => {
            apiResponse.updateSuccessMessage(response,data)
        })
        .catch((err) => {
            response.status(404).send("Can't update the details")
        })
    }
    async delete(request,response){
        return global.staffDetailsServices.delete(request,response)
        .then((data) => {
            apiResponse.successDelMessage(response,data)
        })
        .catch((err)=>{
            response.status(404).send("Can't delete the staff_details")
        })
    }
}

module.exports = StaffDetailsController;