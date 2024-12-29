const name1=prompt("enter name",);

let gender = prompt("Are you male or female?");


if (gender === "male") {
    alert("Welcome Mr."+name1);
} else if (gender === "female") {
    alert("Welcome Ms."+name1);
} else {
     alert("Welcome "+name1);
}
while(true){
    if(gender=="male"||gender=="female"){
        break;
    }
     gender = prompt("Are you male or female?");
}
const order = prompt("What would you like to order? (Shawarma, Zinger, or Burger)");


if (order === "Shawarma" || order === "Zinger" || order === "Burger") {

    alert("Your order for "+ order + " is being prepared.");
    
   
    alert("Customer Name:"+ name1);
    alert("Order:"+ order);
} else {
    alert("Invalid order. Please choose Shawarma, Zinger, or Burger.");
}



const number = prompt("Enter a number :");

if (+number === 1) {
    alert("ONE");
} else if (+number === 2) {
    alert("TWO");
} else if (+number === 3) {
    alert("THREE");
} else if (+number === 4) {
    alert("FOUR");
} else if (+number === 5) {
    alert("FIVE");
} else if (+number === 6) {
    alert("SIX");
} else if (+number === 7) {
    alert("SEVEN");
} else if (+number === 8) {
    alert("EIGHT");
} else if (+number === 9) {
    alert("NINE");
} else {
    alert("PLEASE TRY AGAIN");
}



