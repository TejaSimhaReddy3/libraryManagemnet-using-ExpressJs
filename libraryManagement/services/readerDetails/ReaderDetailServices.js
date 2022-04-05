const { response } = require("express");

class ReaderDetailsServices{
    constructor(readerDetailsRepo){
        this.readerDetailsRepo = readerDetailsRepo;
    }

    get(request){
        return new Promise((resolve,reject) => {
            this.readerDetailsRepo.get(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
    post(request){
        return new Promise((resolve,reject) => {
            this.readerDetailsRepo.post(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
    update(request){
        return new Promise((resolve,reject) => {
            this.readerDetailsRepo.update(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
    delete(request){
        return new Promise((resolve,reject) => {
            this.readerDetailsRepo.delete(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
}

module.exports = ReaderDetailsServices;