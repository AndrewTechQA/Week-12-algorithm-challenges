const users = [
  {
    firstName: "Sergii",
    lastName: "Khromchenko",
    email: "sergii@gmail.com",
    age: 31,
  },
  {
    firstName: "Alex",
    lastName: "Plishka",
    email: "alex@yahoo.com",
    age: 42,
  },
  {
    firstName: "Sergii",
    lastName: "Kewl",
    email: "sergii@verizon.com",
    age: 17,
  },
  {
    firstName: "Mike",
    lastName: "Smith",
    email: "jtravolta@gmail.com",
    //email: "mike@gmail.com",
    age: 55,
  },
  {
    firstName: "John",
    lastName: "Travolta",
    email: "jtravolta@gmail.com",
    age: 18,
  },
  {
    firstName: "Bekka",
    lastName: "GIlbert",
    email: "",
    age: 18,
  },
];


//  1. Find the longest word in 'I love to rock and Codemify'

function longest(a, b) {
  return a.length > b.length ? a : b;
}

function longestWord(str) {
  const words = str.split(" ");
  return words.reduce(longest);
}

console.log(longestWord("I love to rock and Codemify"), '- is the longers word');



//  2. Find users with duplicated email in the users object and put them in array

dupliMails = users.reduce((user, {email}) => user.set(email, user.has(email)), new Map),
duplications = users.filter(({email}) => dupliMails.get(email));

console.log("Duplicated eMails:", duplications);



//  3. Find the youngest user in users object

const young = users.reduce(function(a, b) {
  return b.age < a.age ? b : a;
});

console.log(young.firstName, young.lastName, "is the youngest user");



// 4. Find user with missing email

users.forEach((keys) => {
  if (!keys.email)
  console.log(keys.firstName, keys.lastName + " has no email");
});



// 5. Return an object of users with gmail emails only

const usingGmail = (arr) => console.log(arr.filter((el) => el.email.includes('@gmail.com')));

usingGmail(users);
