const fs = require('fs');

// fs.writeFile(path,data,callback); //写文件
// fs.readFile(path,callback) //读文件

// fs.writeFile('./aa.txt','66666',(err)=>{
//     if(err){
//         console.log('error',err)
//     }else{
//         console.log('yes')
//     }
// })

fs.readFile('./aa.txt',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)  //buffer 字符串
    }
 
})