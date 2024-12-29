

for(let i=0;i<=5;i++){
    alert(i);
}
let intger1="";
for(let i=0;i<=5;i++){
intger1 +=i+",";

}
 alert(intger1);
 let number2="";

for(let i=1;i<20;i++){
    if(i%3==0)
    number2 +=i+" , ";
   
 } 
 alert(number2);


 const number3 = prompt("Enter a number :");
 if(0> number3 || number3 >100){
  alert("error,try again number");
 }
 let num=prompt("Enter a number :");
 let sum=0;
 for(let i=0;i<=+num;i++){
    sum+=i;
 }
 alert(sum);