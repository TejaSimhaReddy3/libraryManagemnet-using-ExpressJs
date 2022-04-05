const { response } = require("express");

class BookIssuedServices{
    constructor(bookIssuedRepo){
        this.bookIssuedRepo = bookIssuedRepo;
    }

    getDetails(request){
        return new Promise((resolve,reject) => {
            this.bookIssuedRepo.getDetails(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
    postBooks(request){
        return new Promise((resolve,reject) => {
            this.bookIssuedRepo.postBooks(request,(error,response)=>{
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
}

module.exports = BookIssuedServices