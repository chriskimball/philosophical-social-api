
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomEmail, getRandomArrItem } = require('./data');
connection.on('error', (err) => err);


connection.once('open', async () => {
  console.log('connected');

  // Drop existing Users
  await User.deleteMany({});

  // Drop existing Thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the students
  const users = [];

  // Get some random assignment objects using a helper function that we imported from ./data
  // const thoughts = getRandomAssignments(20);

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    const name = getRandomName();
    const username = `${name}${Math.floor(Math.random() * 999)}`;
    const email = getRandomEmail(name);

    users.push({
      email,
      username,
    });
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(users);
  
  const userData = await User.find()
  const userIdArr = userData.map(user => user._id.valueOf())
  console.log(userData)
  console.log(userIdArr)

  for (let i=0; i < 30; i++) {
    let newUserId=getRandomArrItem(userIdArr)
    let newFriendId=getRandomArrItem(userIdArr)
    if (newUserId !== newFriendId) {
      await User.findOneAndUpdate(
        {_id: newUserId},
        {$addToSet:{friends:newFriendId}},
        { runValidators: true, new: true}
        )
        

    }
    
  }

  

  // Add courses to the collection and await the results
  // await Course.collection.insertOne({
  //   courseName: 'UCLA',
  //   inPerson: false,
  //   students: [...students],
  // });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  setTimeout(()=>{process.exit(0)}, 5000);
});
