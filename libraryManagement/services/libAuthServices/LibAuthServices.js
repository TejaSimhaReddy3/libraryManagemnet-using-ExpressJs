const { reject } = require("bcrypt/promises");
const { response } = require("express");

class LibAuthServices{
    constructor(libAuthRepo){
        this.libAuthRepo = libAuthRepo;
    }

    getStaff(request){
        return new Promise((resolve,reject) => {
            this.libAuthRepo.getStaff(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
    post(request){
        return new Promise((resolve,reject) => {
            this.libAuthRepo.post(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
    login(request){
        return new Promise((resolve,reject) => {
            this.libAuthRepo.login(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
}

module.exports = LibAuthServices;