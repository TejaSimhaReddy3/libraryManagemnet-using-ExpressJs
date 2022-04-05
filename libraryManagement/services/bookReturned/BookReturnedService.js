const { response } = require("express");

class BookReturnedService{
    constructor(bookReturnedRepo){
        this.bookReturnedRepo = bookReturnedRepo;
    }

    getDetails(request){
        return new Promise((resolve,reject) => {
            this.bookReturnedRepo.getDetails(request,(error,response)=>{
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
    postBooks(request){
        return new Promise((resolve,reject) => {
            this.bookReturnedRepo.postBooks(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
}

module.exports = BookReturnedService;