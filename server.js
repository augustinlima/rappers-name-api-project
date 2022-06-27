const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = express();
const PORT = 8000;


const rappers = {
  '21 savage' : {  
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthlocation': 'London, England'},
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthlocation': 'Chicago, Illinois' 
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthlocation': 'unknown' 
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) =>{
    const rappersName = request.params.name.toLowerCase();
        if( rappers[rappersName] ){
        response.json(rappers[rappersName])
         } else {
            response.json(rappers["unknown"])
         } 
})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`The sever is now runing on port ${PORT}! You better go catch it`)
})
