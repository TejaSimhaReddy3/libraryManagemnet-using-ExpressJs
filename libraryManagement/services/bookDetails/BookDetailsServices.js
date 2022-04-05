const { response } = require("express");
const dbConnect = require("../../../dbConnection/dbConnection")

class BookServices{
    constructor(bookDetailsRepo) {
        this.bookDetailsRepo = bookDetailsRepo;
    }

    getBooks(request){
        return new Promise((resolve,reject) => {
            this.bookDetailsRepo.getBooks(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                // console.log("Executing services",response)
                resolve(response)
            })
        })
    }
    deleteBooks(request){
        return new Promise((resolve,reject) => {
            this.bookDetailsRepo.deleteBooks(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                // console.log(response,"delete method")
                resolve(response)
            })
        })
    }
    addBooks(request){
        return new Promise((resolve,reject) => {
            this.bookDetailsRepo.addBooks(request,(error,response) => {
                if(error){
                    // console.log('rejected here');
                    return reject(error)
                }
                // console.log('data in Services')
                resolve(response)
            })
        })
    }
    updateBook(request){
        return new Promise((resolve,reject) => {
            this.bookDetailsRepo.updateBook(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                // console.log(response)
                resolve(response)
            })
        })
    }
}

module.exports = BookServices;