// #1.
// შექმენით 2 ცვლადი,
// პირველ ცვლადში შეინახეთ თქვენი დაბადების წელი,
// მეორე ცვლადში შეინახეთ მიმდინარე წელი,

// მათემატიკური ოპერატორის საშუალებით ორი ცვლადიდან გამოიანგარიშეთ თქვენი ასაკი და გამოიტანეთ console-ში.

let myBirthyear = 2004;
let currentYear = 2025;
let myAge = currentYear - myBirthyear;
console.log(myAge);

// #2.
// if-else , prompt , Number - გამოყენებით, დავწეროთ კოდი,
// კოდი იწყება 3 შეკითხვით(prompt):
// 1. Enter your age:
// 2. Enter movie type (regular or 3D):
// 3. Enter time of day (matinee or evening):

// თუ მომხმარებელი 10-წელზე ნაკლების არის ticket-ის ფასი იქნება 5 ლარი,
// თუ მომხმარებელი 10-წლიდან 65-წლამდე არის ticket-ის ფასი იქნება 15 ლარი,
// თუ მომხარებელი 65+ წლის არის ticket-ის ფასი იქნება 10 ლარი,

// ასევე 3D ფილს თუ აირჩევს მომხმარებელი ფასს ემატება 5 ლარი.
// თუ საღამოს სიანსია ასევე ემატება 5 ლარი.

// საბოლოოდ უნდა დაგვიწეროს კოდმა ასეთი რამ :  ბილეთის ფასი თქვენთვის არის : 25 ლარი.
// Bonus დავალება, დავამატოთ if ფუნქციონალი, რომელიც შეამოწმებს თუ გვაქვს ფასდაკლების ბილეთი,
// თუ ფასდაკლების ბილეთი გვაქვს ფასს დააკლდეს 25% ან უბრალოდ 5 ლარი.

let isGuestAge = prompt("Enter your age: ");
let movieType = prompt("Enter Movie Type: (regular or 3D)");
let timeChoise = prompt("Enter time of Day");

// let price;
// if (isGuestAge < 10) {
//   price = 5;
// } else if (isGuestAge >= 10 && isGuestAge < 65) {
//   price = 15;
// } else if (isGuestAge > 65) {
//   price = 10;
// }

//! if (isGuestAge < 10) {
// !  console.log("ბილეთის ფასია 5 ლარი");
// !} else if (isGuestAge >= 10 && isGuestAge < 65) {
// !  console.log("ბილეთის ფასია 15 ლარი");
// !} else if (isGuestAge > 65) {
//!   console.log("ბილეთის ფასია 10 ლარი");
//! } else {
//!   console.log("გთხოვთ შეიყვანოთ თქვენი ასაკი მხოლოდ რიცხვებით!");
//! }
