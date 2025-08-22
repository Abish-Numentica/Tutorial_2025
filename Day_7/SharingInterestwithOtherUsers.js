/*const students = [
  {
    id: 0,
    name: ‘Arun’,
    books: [‘Wings of Fire’, ‘Chakra’],
  },
  {
    id: 1,
    name: ‘Ashok’,
    books: [‘Chakra’, ‘War and Peace’, ‘The Shining’]
  },
  {
    id: 2,
    name: ‘Balu’,
    books: [‘Wings of Fire’, ‘All about Cricket’],
  },
  {
    id: 3,
    name: ‘Cathi’,
    books: [‘Against the wind’, ‘The Shining’, ‘War and Peace’]
  },
];
Find the common interest in books for the students
Output
Wings of Fire - [‘Arun’, ‘Balu’]
Chakra - [‘Arun’, ‘Ashok’]
War and Peace - [‘Ashok’, ‘Cathi’],
All about Cricket- [‘Balu’],
Against the wind- [‘Cathi’]
The Shining - [‘Cathi’, ‘Ashok’]
Find the user who shares most interest with other users.
For example: Ashok since he shares book interest with Arun, Cathi. And also Arun since he shares interest with Balu and Ashok */


const students = [
  {
    id: 0,
    name: 'Arun',
    books: ['Wings of Fire', 'Chakra'],
  },
  {
    id: 1,
    name: 'Ashok',
    books: ['Chakra', 'War and Peace', 'The Shining']
  },
  {
    id: 2,
    name: 'Balu',
    books: ['Wings of Fire', 'All about Cricket'],
  },
  {
    id: 3,
    name: 'Cathi',
    books: ['Against the wind', 'The Shining', 'War and Peace']
  },
];

function commonInterestInBooks(bookList) {
  let bookInterest = {};
  
  // Step 1: Create a mapping of books to students
  for (let i = 0; i < bookList.length; i++) {
    for (let j = 0; j < bookList[i].books.length; j++) {
      let book = bookList[i].books[j];
      if (!bookInterest[book]) {
        bookInterest[book] = [];
      }
      bookInterest[book].push(bookList[i].name);
    }
  }

  // Step 2: Output common interests
  console.log('Common Book Interest:');
  for (let book in bookInterest) {
    console.log(book + " - [" + bookInterest[book].join(', ') + "]");
  }

  // Step 3: Count shared interests for each student
  let sharedCounts = {};
  for (let k = 0; k < students.length; k++) {
    sharedCounts[students[k].name] = 0;
  }

  for (let book in bookInterest) {
    if (bookInterest[book].length > 1) {
      for (let i = 0; i < bookInterest[book].length; i++) {
        sharedCounts[bookInterest[book][i]]++;
      }
    }
  }

  // Step 4: Find the student with the most shared interests
  let maxCount = 0;
  let topSharer = "";
  for (let name in sharedCounts) {
    if (sharedCounts[name] > maxCount) {
      maxCount = sharedCounts[name];
      topSharer = name;
    }
  }

  console.log("\nStudent who shares most interests: " + topSharer);
}

// Call the function
commonInterestInBooks(students);
