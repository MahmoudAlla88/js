const name1=prompt("enter name",);

let gender = prompt("Are you male or female?");


if (gender === "male") {
    alert("Welcome Mr."+name1);
} else if (gender === "female") {
    alert("Welcome Ms."+name1);
} else {
     alert("Welcome "+name1);
}
if(gender!="male"||gender!="female")
   gender= gen(gender);


    function gen(gender){
while(true){
    if(gender=="male"||gender=="female"){
        return gender;
    }
     gender = prompt("Are you male or female?");
} }
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

let arr=[name1,gender,order];
for(let i=0;i<=arr.length-1;i++){
    console.log(arr[i]);
}


// let ar=[5,3,2,4,4,3];
// rev(ar);
// function rev(ar){
//     let revarray=[];
// for(let i=ar.length-1,j=0;i>=0;i--,j++){
// revarray[j]=ar[i];
// }
// console.log(revarray)
// }

// for(let i=0;i<=15;i++){
//     if(i%2==0)
//     console.log(i+"is even");
//    else if(i%2==1)
//         console.log(i+"is odd");
// }







// let str="orange";

// revstring(str);
// function revstring(a){
// console.log(a);
// let arr = a.split("");

// for(let i=0;i<arr.length;i++){
// for(let j=i;j<arr.length;j++){
// if(arr[i]>arr[j]){
//   let t=arr[i];
//   arr[i] = arr[j];
//   arr[j] = t;

// }

// }
//   console.log(arr[i]);
// }

// }


//  let num = prompt("Enter Number");
// let s2 = "";

// for (let i = 0; i < num.length ; i++) {
//   if (+num[i] % 2 == 0 && +num[i + 1] % 2 == 0){
//      s2 += num[i] + "-";
// } 
// else if(+num[i]%2==0 && +num[i + 1] % 2 != 0)
//     s2 += num[i] ;

//   else 
//   s2 += num[i];
// }

// console.log(s2);


// function AgeChecker(age) {
//   return age >= 18 ? "The user is Adult" : "The user is Minor";
// }

// console.log(AgeChecker(20));
// console.log(AgeChecker(15));
// إنشاء العنصر <div>
const div = document.createElement('div');


const paragraph = document.createElement('p');
paragraph.textContent = name1;
div.appendChild(paragraph); 


const ol = document.createElement('ol');


const li1 = document.createElement('li');
li1.textContent = gender;

const li2 = document.createElement('li');
li2.textContent = 'Age: 27';

const li3 = document.createElement('li');
li3.textContent = order;


ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3);


div.appendChild(ol);

document.body.appendChild(div);




const form1 = document.getElementById("form1");
const details = document.getElementById("details");


form1.addEventListener("submit",function(events){
    events.preventDefault(); 
    const username = document.getElementById("username").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  
  const orderChoice = document.querySelector('input[name="orderChoice"]:checked');
  if (!orderChoice) {
    details.textContent = "Please select an order choice.";
    return;
  }
  //edit
  const selectedOrder = orderChoice.value;
  details.innerHTML=
 `
    <b>Username:</b> ${username} <br>
    <b>Age:</b> ${age} <br>
    <b>Gender:</b> ${gender} <br>
    <b>Order Choice:</b> ${selectedOrder}
  `;});