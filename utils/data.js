// TODO:

const nameArr = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];

  const emailDomains = [
      '@gmail.com',
      '@yahoo.com',
      '@hotmail.com',
      '@aol.com',
  ]
  
  const thoughtArr = [
    'You are the best.',
    'Coding is awesome!',
    'Keep your head up.',
    'You can do anything you put your mind to.',
    'Stay positive',
    'Hard work pays off.',
    'My dog is my best friend.',
    'How much wood could a wood chuck chuck?',
    'I recommend coding for at least one hour per day.',
    'Everything happens for a reason.',
    'I can think of many things to say.',
    'We all should appreciate the little things in life',
    'Wow, this is a cool thought.',
    'How many more thoughts should I think of?',
    'Maybe a few more.',
    'When a tree falls in the forest, does it make a sound?',
    'The end!'
  ];

  const reactionArr = [
    'That is a cool thought.',
    'Thank you for sharing your thoughts.',
    'I agree with your thought!',
    'Wow, amazing!',
    'Cool!',
    'Could you share more?',
    'You know that might not be right...',
    'Where did you learn this?',
    'Another sample reaction here!'
  ]
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () => `${getRandomArrItem(nameArr)}`;
  const getRandomEmail = (name) => `${name}${Math.floor(Math.random() * 9999)}${getRandomArrItem(emailDomains)}`
  const getRandomThought = () => `${getRandomArrItem(thoughtArr)}`
  const getRandomReaction = () => `${getRandomArrItem(reactionArr)}`
  
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomEmail, getRandomArrItem,getRandomThought, getRandomReaction };
  