//#### get user name

// declaration of vars
//let userName;
//let age;
//let email;
//let password;
//let country;
//let salary;
//get information from user
//userName=prompt("Enter your name");
//age=Number(prompt("Enter your age"));
//email=prompt("Enter your email");
//password=prompt("Enter your password");
//country=prompt("Enter your Country");
//salary=Number(prompt("Enter your salary"));

//store information in vars
//transform the string in numbers
//display the values in html
//console.log(userName,age,email,password,country,salary);

//for(let x=1; x<100; x++){
//    document.write(`<li>${x}</li>`);
//}

//while loop

//let j=50
//while(j<10){
  //  console.log(j);
    //j++;
//}

//do loop

//let m=5;

//do{
//    console.log(m);
//    m++;
//}while(m<10);

let product; 
let quantity; 
let price; 
let taxes; 
let finalProductPrice;

product=prompt("Enter name of product");
quantity=Number(prompt("Enter the quantity"));
price=Number(prompt("Enter the cost"));
taxes=Number(prompt("Enter your tax rate"));

finalProductPrice= `

<p><b>Product:</b> ${product} </p>
<p><b>Product Price (Including Tax): $</b></P>${(quantity*price)+(1+taxes)}
`;


document.write(finalProductPrice);




