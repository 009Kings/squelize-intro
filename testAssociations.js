/* 
Once the association is set up, we can use:
createModel
getModels
setModel
addModel
---- Replace "Model" with your model name
*/

const db = require('./models');
const user = require('./models/user');

// Make a pet
// db.pet.findOrCreate({
//     where: {
//         name: 'Nala'
//     }, 
//     defaults: {
//         description: 'Very fluffy cream Eurasier',
//     }
// }).then(([dog, created]) => {
//     console.log(`${dog.name} is ${dog.description}`)
// }).catch(err => console.log(err));

// Create an associated item with `createPet`
// db.user.findOne()
// .then(user => {
//     console.log(`🐶 Adding pet to ${user.name}`);
//     user.createPet({
//         name: 'Spot',
//         species: 'dog',
//         description: 'loves life with their family'
//     }).then(createdPet => {
//         console.log(`${user.name} just adopted their pet ${createdPet.species} ${createdPet.name}`);
//     });
// });

// Load associated items `getPet`
// db.user.findByPk(1)
// .then(user => {
//     // load the pets for this user
//     user.getPets()
//     .then(pets => {
//         // do sth to this
//         console.log('🐳');
//         console.log(pets);
//     });
// });

// `setPet` and `addPet`
// db.pet.findByPk(1)
// .then(pet => {
//     db.user.findByPk(5)
//     .then(user => {
//         // associate them
//         user.addPet(pet)
//         console.log('Adopt a pet to reduce crankiness')
//     })
// })

// Eager Loading
db.user.findAll({
    include: [db.pet]
}).then(users => {
    // each user object (each item in the users array)
    // has a .pets key with an array of pet objs
    users.forEach(user => {
        console.log(`${user.name}'s pets:`);
        if (user.pets.length < 1) {
            console.log(`--${user.name} has no pets 😢`);
        }
        user.pets.forEach(pet => {
            console.log(`--- ${pet.name}`);
        });
    });
});