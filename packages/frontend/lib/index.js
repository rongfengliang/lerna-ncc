const userlogin = require("userlogin")
const uiConf = require("./frontend")()
const app = require("express")()

app.get('/', function (req, res) {
    let loginToken  = new userlogin({name:uiConf.defaultUser,age:uiConf.defautltAge})
    res.send(loginToken)
})

app.listen(3000,"0.0.0.0",()=>{
    console.log("api server is running")
})
