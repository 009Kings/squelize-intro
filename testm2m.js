const db = require('./models');
// --------------- Add a toy to a pet ---------------

// first get a reference to a pet
// db.pet.findOrCreate({
//     where: {
//         name: 'Silly May',
//         species: 'Mini Aussie'
//     },
//     defaults: {
//         userId: 1
//     }
// }).then(([pet, created]) => {
//     // Get a reference to a toy
//     db.toy.findOrCreate({
//         where: {
//             type: 'stinky bear',
//             color: 'brown'
//         }
//     }).then(([toy, created]) => {
//         // use the "addModel" method to attach one model to another model.
//         pet.addToy(toy).then(relation => {
//             console.log(`🦊 ${toy.type} added to ${pet.name}`)
//             console.log(relation)
//         })
//     })
// })