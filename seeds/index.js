const sequelize = require('../config/connection');
const { User, Garden } = require('../models');

const userData = require('./userData.json');
const gardenData = require('./gardenData.json');
// const plantData = require('./plantData.json');
// const animalData = require('./animalData.json');
// const postData = require('./postData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  console.log('\n----- DATABASE SYNCED ----- \n')

  await User.bulkCreate(userData, {
    individualHooks: true, 
    returning: true
  })
  console.log('\n----- USERS SYNCED -----\n')
  
  await Garden.bulkCreate(gardenData)
  console.log('\n----- GARDENS SYNCED -----\n')
  
  // await Plant.bulkCreate(plantData)
  // console.log('\n----- PLANTS SEEDED -----\n')

  // await Animal.bulkCreate(animalData)
  // console.log('\n----- ANIMAL SEEDED -----\n')

  // await Post.bulkCreate(postData)
  // console.log('\n----- POST SEEDED -----\n')


  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();