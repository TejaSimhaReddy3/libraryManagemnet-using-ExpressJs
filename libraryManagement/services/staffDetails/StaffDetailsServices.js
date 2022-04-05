const { response } = require("express");

class StaffDetailsServices{
    constructor(staffDetailsRepo){
        this.staffDetailsRepo = staffDetailsRepo;
    }

    get(request){
        return new Promise((resolve,reject) => {
            this.staffDetailsRepo.get(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
    post(request){
        return new Promise((resolve,reject) => {
            this.staffDetailsRepo.post(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
    update(request){
        return new Promise((resolve,reject) => {
            this.staffDetailsRepo.update(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
    delete(request){
        return new Promise((resolve,reject) => {
            this.staffDetailsRepo.delete(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
}

module.exports = StaffDetailsServices;