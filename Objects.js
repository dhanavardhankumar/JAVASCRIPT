// 1. Create a student object with nested address

//const student = {
  //name: "D.Deepiika",
  //age: 20,
  //address: {
    //city: "Kalyandurgam",
    //state: "AP",
    //pincode: 515761,
  //},
//};


// 2. Copy an object and change a property , also add a new property

// const updatedStudent = {
//       student,
//   country:"India",
//   course: "Nursing",
// };
// console.log(updatedStudent);

// 3. Decide whetehr to sue array or object for:

//     List of Marks

// let marks = [85, 90, 78, 92, 88];

// console.log("Marks:", marks);
// console.log("First mark:", marks[0]);

// //     User profile

// let userProfile = {
//   name: "D.Vardhan Kumar",
//   age: 22,
//   email: "dhaanavardhankumar@gmail.com",
//   isStudent: true
// };

// console.log("User Profile:", userProfile);
// console.log("User Name:", userProfile.name);

// // 4.     Shopping Cart items

// let shoppingCart = [
//   { id: 1, name: "Choclates", price: 50, quantity: 2 },
//   { id: 2, name: "Biscuits", price: 30, quantity: 1 },
//   { id: 3, name: "Kurkure", price: 60, quantity: 1 }
// ];

// console.log("Shopping Cart:", shoppingCart);
// console.log("First item name:", shoppingCart[0].name);


// 5. Create a book object with title, author, rating

const book = {
  title: "Youtube Chanel Tips & Tricks",
  author: "Rajasekhar",
  rating: 4.5,
  describe(){
    console.log("book" , this.author);

  }
};