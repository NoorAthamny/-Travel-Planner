// 1.

function travelBudget(num) {
  num > 1000
    ? console.log("Luxury travel")
    : console.log("Looking for budget travel");
}

travelBudget(3000);
travelBudget(900);

// 2.

function destinationTemp(num) {
  num > 15 && num < 27
    ? console.log("Ideal weather for the trip")
    : console.log("Consider another destiniation or time");
}

destinationTemp(30);
destinationTemp(25);

// 3.

function booked(flightBooked, hotelBoooked) {
  if (flightBooked == true && hotelBoooked == true) {
    console.log("Your travel plan is set.");
  } else if (flightBooked == true && hotelBoooked == false) {
    console.log("You need to book a hotel");
  } else if (flightBooked == false && hotelBoooked == true) {
    console.log("You need to book a flight");
  }
}

booked(true, true);
booked(true, false);
booked(false, true);

// 4.

function packagePrice(chosen, alternative) {
  if (chosen == alternative || chosen < alternative) {
    console.log("You've chosen the best priced package");
  } else {
    console.log("Consider switcing for a better price");
  }
}

packagePrice(3000, 2000);
packagePrice(1000, 1000);

// 5.

function disount(age) {
  if (age >= 65) {
    console.log("Eligible for citizen discount");
  } else if (age <= 18) {
    console.log("Eligible for student discount");
  } else {
    console.log("Regular pricing applies");
  }
}
disount(65);
disount(18);
disount(23);

// Switch statment

// 1.

function day(num) {
  switch (num) {
    case 1:
      console.log("sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Friday");
      break;
    default:
      console.log("Invalid Day");
  }
}

day(3);
day(1);
day(8);

// 2.

let themeColor = "blue";

switch (themeColor) {
  case "light":
    console.log("Color is Light");
    break;
  case "dark":
    console.log("Color is dark");
    break;
  case "sea":
    console.log("Color is sea");
    break;
  default:
    console.log("unsupported color");
}

//  or
function themeColor1(color) {
  switch (color) {
    case "light":
      console.log("Color is Light");
      break;
    case "dark":
      console.log("Color is dark");
      break;
    case "sea":
      console.log("Color is sea");
      break;
    default:
      console.log("unsupported color");
  }
}

themeColor1("sea");

// 6.

let score = 90;

const msg1 = "Highly Satisfied";
const msg2 = "Satisfied";
const msg3 = "Neutral";
const msg4 = "dissatisfied";

switch (true) {
  case score >= 90:
    console.log(msg1);
    break;

  case score > 70 && score < 90:
    console.log(msg2);
    break;

  case score == 60:
    console.log(msg3);
    break;

  default:
    console.log(msg4);
}
