// const colors = require("colors");
//  const chalk = require("chalk");

// console.log("Hello Viendra");

// console.log(chalk.blue("This is aanotheer module we use."));

const http = require("http");
const datas = require("./data");
const port = 8000;
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application\json"});
    res.write(JSON.stringify(datas));
    //    res.write("Heello  Vireenndra Hwm are yoou ?");
    res.end();
}).listen(8000);
// server.listen(port,()=>{
//     console.log(`Server is  listening on https://localhost:${port}`);
// });