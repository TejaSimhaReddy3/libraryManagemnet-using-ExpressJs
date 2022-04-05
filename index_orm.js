const Sequelize = require("sequelize");
const sequelize = new Sequelize("librarymgmt","root","teja1955",{
    dialect:"mysql",
    host:"localhost",
})

const lib_authentication = sequelize.define("lib_authentication", {
  mobile_number: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  passsword: {
      type: Sequelize.STRING,
      allowNull: false
  }
});

sequelize
.sync()
.then((result)=>{
    console.log(result)
}).catch(err=>{
  console.log(err);
})

module.exports = lib_authentication;

