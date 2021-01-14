/* 
Once the association is set up, we can use:
createModel
getModels
setModel
addModel
---- Replace "Model" with your model name
*/

const db = require('./models');

// Make a pet
db.pet.findOrCreate({
    where: {
        name: 'Nala'
    }, 
    defaults: {
        description: 'Very fluffy cream Eurasier',
    }
}).then(([dog, created]) => {
    console.log(`${dog.name} is ${dog.description}`)
}).catch(err => console.log(err));

// Create an associated item with createModel