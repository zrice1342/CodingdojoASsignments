const express = require("express");
const app = express();
const port = 8000;
var faker = require('faker');



class User{
    constructor(){
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}


class Company{
  constructor(){
      this._id = faker.datatype.uuid()
      this.companyName = faker.company.companyName()
      this.street = faker.address.streetAddress()
      this.city = faker.address.city()
      this.zip = faker.address.zipCode()
      this.country = faker.address.country()
  }
}


app.get("/api/users/new", (req,res)=>{
    let newUser = new User()
    res.json({data: newUser})
})
app.get("/api/company/new", (req,res)=>{
  let newComany = new Company()
  res.json({data: newComany})
})

app.get("/api/user/company", (req,res)=>{
  let newComany = new Company()
  let newUser = new User()
  res.json({data: newUser})
  res.json({data: newComany})
})
// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

