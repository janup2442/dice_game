var mysql = require('mysql');
var con = mysql.createConnection(()=>{
    host:sql12.freemysqlhosting.net;
    user:sql12629239;
    password:IANTs992y4;
    database:sql12629239;
})


con.connect((err)=>{
    if(err){
        console.log(err);
    }
    console.log("connected");
})