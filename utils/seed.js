const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomName, getRandomEmail, getRandomArrItem, getRandomThought, getRandomReaction } = require("./data");
connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing Users
  await User.deleteMany({});

  // Drop existing Thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {
    const name = getRandomName();
    const username = `${name}${Math.floor(Math.random() * 9999)}`;
    const email = getRandomEmail(name);

    users.push({
      email,
      username,
    });
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  // Finding newly created user data so we can use their id's and usernames for additional seed actions.
  const userData = await User.find();
  const userArr = userData.map(({_id, username}) => ({id:_id.valueOf(), username}));

  // Adds friend to user account if the randomized userid does not equal the potential friend's userid. Loop runs 50 times.
  for (let i = 0; i < 50; i++) {
    let newUserId = getRandomArrItem(userArr).id;
    let newFriendId = getRandomArrItem(userArr).id;
    if (newUserId !== newFriendId) {
      await User.findOneAndUpdate({ _id: newUserId }, { $addToSet: { friends: newFriendId } }, { runValidators: true, new: true });
    }
  }

  // Loop to create 100 thoughts for random users.
  for (let i = 0; i < 100; i++) {
    const thoughtUser = getRandomArrItem(userData);

    await Thought.create({
      thoughtText: getRandomThought(),
      username: thoughtUser.username,
    });
  }

  // Retreiving newly created thought data and mapping it into new array so we can add reactions to newly created thought ids.
  const thoughtData = await Thought.find();
  const userThoughtArr = thoughtData.map(({ _id, username, thoughtText }) => ({ id: _id.valueOf(), username, thoughtText }));
  
  // Updating user objects with their associated thought ids.
  for (let i = 0; i < userThoughtArr.length; i++) {
    await User.findOneAndUpdate({ username: userThoughtArr[i].username }, { $addToSet: { thoughts: userThoughtArr[i].id } }, { runValidators: true, new: true });
  }

  // Adding 100 random reactions to random user thoughts.
  for (let i = 0; i < 100; i++) {
    await Thought.findOneAndUpdate(
      { _id: getRandomArrItem(userThoughtArr).id },
      {
        $addToSet: { reactions: { reactionBody: getRandomReaction(), username: getRandomArrItem(userArr).username } },
      }
    );
  }

  console.table(users);
  console.table(userThoughtArr);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
