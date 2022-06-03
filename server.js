//const { response } = require('express');
const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 8000

const rappers = {

    "21 savage" : {
        'birthName': 'Sheyaa Bin  Abraham-Joseph',
        'birthLocation': 'London, England',
        'age': 29
    },
    
    "chance the rapper" : {
        'birthName': 'Sheyaa Bin  Abraham-Joseph',
        'birthLocation': 'London, England',
        'age': 29
    },
    "unknown": {"Unknown": ''}
}

app.get('/', (req, response) => {
    response.sendFile(__dirname + '/index.html');
})

app.get('/api/:name', (req, response) => {
    const rapperName = req.params.name.toLowerCase();
    if (rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})