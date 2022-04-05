const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*
-controller
--bookdetails
---contoller
---repo
---server

-controller
--book
--user
-repo
--book
--user
-service
--book
--user

modules
-books
-- bookcontroller
-- bookmodel
-users
*/

const superTest = require('supertest');
const request = superTest(app)

const apiRoutes = require('../route/api')

app.use(bodyParser.json());
app.use('/api',apiRoutes);

app.listen(3000,() => console.log('Test file conected to the server'));


describe('test endpoints for book_details', () => {
    it('Should "GET" ',async()=>{
        const res = await request.get('/api/bookDetails/books')
        // console.log(res)
        expect(res.status).toBe(200)
    })
    it('Should POST',async() => {
        let newBook = {
            ISBN:'458-3-14-753951-4',title:'The White Walkers',edition:'1980',category:'Epic Fantasy',price:199,publisher_id:101,books_count:50
        }
        const res = await request.post('/api/bookDetails/addBooks').send(newBook)
        expect(res.status).toBe(200)
    })
    it('should PUT',async() => {
        const toUpdateData = {
            category: 'Smugling'
        }
        const res = await request.put('/api/bookDetails/updateBook/785-2-12-745896-2').send(toUpdateData)
        expect(res.status).toBe(200)
    })
    it('Should DELETE',async()=>{
        const res = await request.delete('/api/bookDetails/delBooks/458-3-14-753951-4').send('Data has been Deleted')
        // console.log(res)
        expect(res.status).toBe(404)
    })
})

describe('test endpoints for issued_book_details', () => {
    it('Should "GET" ',async()=>{
        const res = await request.get('/api/bookIssued/get')
        // console.log(res)
        expect(res.status).toBe(200)
    })
    it('Should POST',async() => {
        // console.log('YEah it"s passing')
        let newBook = {
            r_id: 3,issued_staff_id: 2
        }
        console.log(newBook)
        const res = await request.post('/api/bookIssued/post/258-8-44-789543-7').send(newBook)
        // console.log(request)
        expect(res.status).toBe(200)
    })
})

describe('test endpoints for returned_book_details', () => {
    it('Should "GET" ',async()=>{
        const res = await request.get('/api/bookReturned/get')
        // console.log(res)
        expect(res.status).toBe(200)
    })
    it('Should POST',async() => {
        // console.log('YEah it"s passing')
        let newBook = {
            r_id: 3,issued_staff_id: 2
        }
        console.log(newBook)
        const res = await request.post('/api/bookReturned/post/258-8-44-789543-7').send(newBook)
        // console.log(request)
        expect(res.status).toBe(200)
    })
})

describe('test endpoints for publisher_book_details', () => {
    it('Should "GET" ',async()=>{
        const res = await request.get('/api/publisherDetails/get')
        // console.log(res)
        expect(res.status).toBe(200)
    })
    it('Should POST',async() => {
        let newPublisher = {
            publisher_id: 110,publisher_name:"Brinda Series",year_of_publication:"2008-7-31"
        }
        const res = await request.post('/api/publisherDetails/addPublisher').send(newPublisher)
        expect(res.status).toBe(200)
    })
    it('should PUT',async() => {
        const updatePublisher = {
            publisher_name: 'Book India'
        }
        const res = await request.put('/api/bookDetails/updateBook/785-2-12-745896-2').send(updatePublisher)
        expect(res.status).toBe(200)
    })
})

describe('test endpoints for reader_details', () => {
    it('Should "GET" ',async()=>{
        const res = await request.get('/api/readerDetails/get')
        // console.log(res)
        expect(res.status).toBe(200)
    })
    it('Should POST',async() => {
        let addReader = {
            r_id:6,mail_id:"bhuvan@rgukt.in",first_name:"Bhuvan",last_name:"Prasad",mobile_number:9652,address:"Gajulapalle"
        }
        const res = await request.post('/api/readerDetails/addReader').send(addReader)
        expect(res.status).toBe(200)
    })
})

describe('test endpoints for staff_details', () => {
    it('Should "GET" ',async()=>{
        const res = await request.get('/api/staffDetails/get')
        // console.log(res)
        expect(res.status).toBe(200)
    })
    it('Should POST',async() => {
        let addStaff = {
            staff_id: 1,name:"Ragav",assigned_student_id:1,mobile_number:9441
        }
        const res = await request.post('/api/staffDetails/addStaff').send(addStaff)
        expect(res.status).toBe(200)
    })
    it('should PUT',async() => {
        const updateStaff = {
            name: 'Raghav Ram'
        }
        const res = await request.put('/api/bookDetails/updateBook/1').send(updateStaff)
        expect(res.status).toBe(200)
    })
    it('Should DELETE',async()=>{
        const res = await request.delete('/api/staffDetails/removeStaff/1')
    })
})
