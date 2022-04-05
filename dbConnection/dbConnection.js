const mysql = require('mysql')

let connectionEst = mysql.createConnection({
    host: "localhost",
    user:'root',
    password:'teja1955',
    database:'librarymgmt',
});

connectionEst.connect((error) => {
    if(!error){
        console.log("Connection establishment Success !!");
    }else{
        console.log(`Connection ${error}`);
    }
})
module.exports = connectionEst;