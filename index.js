


// const http = require('http');
//   const server = http.createServer((req , res) => {
//     console.log(req.url);
//        if(req.method == "GET")
//        {
//          if(req.url == "/tdoe")
//         res.write("toooo");
//        }

//        if(req.method == "DELETE")
//        {
//         res.write("delete");
//        }
     
//       res.end();
// });

// server.listen(3000) ;

// const express = require('express') ;
// const app = express();
// app.get('/',(req ,res)=>{

//   res.send("wqqqqqqq");

// });
// app.get('/tt',(req ,res)=>{

//   res.send("look");

// });

// app.get('/tt/google/:id',(req ,res)=>{
//     console.log(req.params);
//   res.send("goo");

// });

// app.listen(3000 , () => {
//   console.log('server run ') ;
// })
////////////////////////////////////////////////////////////////
///////////////////////////////////////

const express = require('express') ;
const app = express() ;
app.use(express.json());
//crud  
//post
const todoes =[];
app.post('/todos/', (req ,res) => {
      todoes.push(req.body) ;
      //  console.log(req.body);
      res.status(204).end();
});

app.get('/todos/' , (req ,res) => {
   
      res.json(todoes);
});

app.get('/todos/:id' , (req ,res )=> {
     const {id} =  req.params ;
     todoes.find((todoe) => {
       todoe.id ==id 
       res.json(todoe.id);
     })

});

app.delete('/todos/:id' , (req ,res) => {

  const {id} =  req.params ;
   todoes.filter( (todoe) => {
    todoe.id ==id ;
    delete todoe.id ;
    res.json(todoes);

   })
});

app.patch('/todos/:id' , (req ,res) => {

  const {id} =  req.params ;
     todoes.forEach((todoe) => {
        todoe.id ==id ;
       todoe.id = 70 ;

     });
    
   res.json(todoes);
 
});


app.listen(3000 , ()=> {
  console.log('server run ');
})





















































////////////////////////////
//////////////////////////////////////////
//  console.log('welcome');
//  console.log('4444444444');

 //const axios = require('axios');
 //axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response.data)) ;

//axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response.data)) ;
// axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response)) ;
 

  // const sum = require('./helper');
  // console.log(sum) ;

//   const http =require('http') ;
//   const server = http.createServer((req,res) => {
//      res.write('hello') ;
//      res.end();
//   });
//   server.listen(3000);




