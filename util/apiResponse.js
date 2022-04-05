const { response } = require("express")

exports.notFoundError = function(response,msg){
    return response.status(404).send(`Data not found`);
}

exports.updateSuccessMessage = function(response,message){
    return response.status(200).send('Data has been updated');
}

exports.successDelMessage = function(response,message){
    return response.status(200).send('Data has been Deleted');
}

exports.postSuccessMessage = function(response,message){
    return response.status(200).send('Data has been inserted succesfully')
}

exports.unAuthMessage = function(response,message){
    return response.status(404).send('Unauthorized');
}