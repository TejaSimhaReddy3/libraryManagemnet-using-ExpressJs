class PublisherDetailsServices{
    constructor(publisherDetailsRepo){
        this.publisherDetailsRepo = publisherDetailsRepo;
    }

    get(request){
        return new Promise((resolve,reject) => {
            this.publisherDetailsRepo.get(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
    post(request){
        return new Promise((resolve,reject) => {
            this.publisherDetailsRepo.post(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
    put(request){
        return new Promise((resolve,reject) => {
            this.publisherDetailsRepo.put(request,(error,response) => {
                if(error){
                    return reject(error)
                }
                resolve(response)
            })
        })
    }
}

module.exports = PublisherDetailsServices;