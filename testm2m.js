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

// // Demo in a route — Create 
// app.post('/pets/toys', (req, res) => {
//     // get ref to pet
//     db.pet.findByPk(req.body.petId).then(pet => {
//         // get a ref to toy
//         db.toy.findByPk(req.body.toyId).then(toy => {
//             pet.addToy(toy).then(association => {
//                 res.redirect(`/pets/${req.body.petId}`)
//             }).catch(err => {
//                 console.log('🔥 ERROR IN pet.addToy')
//                 console.log(err)
//                 res.redirect('/404')
//             }) //addToy end
//         }) // findToy end
//     }) //findPet end
// })

// --------------- Read some stuff ---------------
// db.toy.findOne().then(toy => {
//     toy.getPets().then(pets => {
//         console.log(`${pets.length} pet(s) love the ${toy.color, toy.type}`)
//     })
// })

// db.toy.findOne({
//     include: [db.pet]
// }).then(toy => {
//     console.log(`${toy.pets.length} pet(s) love the ${toy.color, toy.type}`)
// })

// db.toy.findOrCreate({
//     where: {
//         type: 'rope',
//         color: 'multicolored'
//     },
//     include: [db.pet]
// }).then(([toy, created]) => {
//     // print out associated pets if there are any
//     // console.log(toy)
//     if(!created && toy.pets.length > 0) {
//         toy.pets.forEach(pet => {
//             console.log(`🥎 ${pet.name} loves their ${toy.color, toy.type}`)
//         })
//     } else {
//         // if no pets associated, then findOrCreate a pet and add it to the toy
//         db.pet.findOrCreate({
//             where: {
//                 name: 'Ruby Tuesday',
//                 species: 'Toy Aussie'
//             }
//         }).then(([pet, created]) => {
//             toy.addPet(pet).then(association => {
//                 console.log(association)
//                 console.log(`🎾 ${pet.name} just discovered their new ${toy.color, toy.type}`)
//             })
//         })
//     }

// })

// db.toy.findOne({
//     where: {
//         type: 'ball',
//         color: 'green'
//     },
//     include: [db.pet]
// }).then(toy => {
//     toy.pets.forEach(pet => {
//         console.log(`♥️ ${pet.name} loves this ${toy.type}!`)
//     })
// })

// db.pet.findOne({
//     where: {
//         name: 'Silly May'
//     },
//     include: [db.toy, db.user]
// }).then(pet => {
//     pet.toys.forEach(toy => {
//         console.log(`🐶 ${pet.user.name}'s pet ${pet.name} loves their ${toy.type}`)
//     })
// })

db.user.findByPk(1).then(user => {
    user.getPets({ include: [db.toy] }).then(pets => {
        pets.forEach(pet => {
            console.log(`${user.name}'s pet ${pet.name} has ${pet.toys.length} toys(s)`)
        })
    })
})