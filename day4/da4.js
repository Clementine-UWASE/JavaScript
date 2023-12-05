// block program
let counter;
console.log(counter);
{
    counter = 2;
    console.log(counter);
}
counter = counter + 5;
console.log(counter);
let height = 180;
let weight = 90;
{

    console.log(height);
    console.log(weight);
}
height =  height + 5;
weight =  weight + 7;
console.log(height);
console.log(weight);
height = height + weight;
let candle = 98;
{
    let bundle = 89;
    let henz = "welcome";
    {
        
        console.log(candle);
        console.log(bundle);
        console.log(henz);
    }
    console.log(candle);
    console.log(bundle);
    console.log(henz);
    let cally =3;
    
    {
       
        let san =9;
        console.log(cally);
        console.log(san);
    }
    
}
var holl = 4;
{
    var goal = 5;
    console.log(holl);
    console.log(goal);
}
// function
function dine() {
    
}
console.log("welcome again");
console.log(" is it  good");
    console.log("is it possible");
    // var keyword in function
    var globalGreeting = "Good";
    var localGreeting= "Morning";
   
    function test()
   
    {
    
       
        console.log("function:");
        console.log(globalGreeting);
        console.log(localGreeting);
    }
    test();
    console.log("main program");
    console.log(globalGreeting);
    console.log("localGreeting");
    //Variable shadowing
    let conter = 100;
    console.log(conter);
    {
        conter = 200;
        console.log(conter);
    }
    console.log(conter);
    let add = 2 + "3" ;
    console.log(add);
    let first = Symbol("Clementine");
    console.log(first);
    const symbol1 = Symbol();
const symbol2 = Symbol('mySymbol');

// Using symbols as property keys
const obj = {
  [symbol1]: 'Welcome',
  [symbol2]: 'There and game'
};

console.log(obj[symbol1]); // Outputs: Value for symbol1
console.log(obj[symbol2]); // Outputs: Value for symbol2
let undefinedVariable;
//null is often used to represent the intentional absence of a value, while undefined is typically the default value of uninitialized variables or the value returned by functions with no explicit return statement.
let nullVariable = null;

console.log(undefinedVariable === null); // Outputs: false

console.log(nullVariable === null);
(function(){
    setTimeout(()=> console.log(1),2000);
    console.log(2);
    setTimeout(()=> console.log(3),0);
    console.log(4);
   })();
  // Contact information
const contact1 = {
    name: 'Maxwell Wright',
    phone: '(0191) 719 6495',
    email: 'Curabitur.egestas.nunc@nonummyac.co.uk'
  };
  
  const contact2 = {
    name: 'Raja Villarreal',
    phone: '0866 398 2895',
    email: 'posuere.vulputate@sed.com'
  };
  
  const contact3 = {
    name: 'Helen Richards',
    phone: '0800 1111',
    email: 'libero@convallis.edu'
  };
  
  // Display information about the first contact
  console.log(`First Contact: ${contact1.name}/${contact1.phone}/${contact1.email}`);
  
  // Display information about the last contact
  console.log(`Last Contact: ${contact3.name}/${contact3.phone}/${contact3.email}`);
  let testObj = {};
  console.log(typeof testObj); // -> object
   let variabletest ={
    a : 7,
    b : "hello"
   };
   console.log(variabletest);
   console.log(variabletest.a);
   console.log(variabletest.b);
   let firstName1 = "Mutoni";
   let lastName1 = "Claire";
   let email1 = "claire@gmail.com";
   let address1 = "nYamirambo";
   let age1 = 23;
   let firstName2 = "Mutoni";
   let lastName2 = "Claire";
   let email2 = "claire@gmail.com";
   let address2 = "nYamirambo";
   let age2 = 23;
   console.log(`${firstName1},${lastName1},${email1},${address1},`);
   let user1={
    firstName1:"Mutoni",
    lastName1: "Claire",
    email1 :"claire@gmail.com",
    address1 :"nYamirambo",
    age1:23
   };
   let user2 ={
    firstName2 : "Mutoni",
   lastName2 : "Claire",
    email2 : "claire@gmail.com",
   address2 : "nYamirambo",
    age2 : 29
   };
console.log(user1. firstName1);
console.log(user1. lastName1);
console.log(user1. email1);
console.log(user1. address1);
console.log(user1. age1);
console.log(user2.firstName2,user2.lastName2,user2.address2,user2.age2);
user1.fName = "Aline";
console.log(user1.fName);
delete user1.firstName1;
console.log(user1.fName);
let days = ["monday","tuesday","wednesday","thursday","friday","saturday","sanduy"];
days[0]="sunday";
console.log(days[0]);
console.log(days[1]);
console.log(days[3]);
console.log(days[2]);
console.log(days[4]);
console.log(days[6]);
let empty = [];
console.log(empty[0]);
 let animals = [];
console.log(animals[0]); // -> undefined
  
 animals[0] = "dog";
animals[2] = "cat";
   
 console.log(animals[0]); // -> dog
 console.log(animals[1]); // -> undefined
 console.log(animals[2]); // -> cat
  let values = ["Test", 7, 12.3, false];
 
  console.log(values);
  console.log(values[0]);
  console.log(values[3]);
  console.log(values[4]);
  console.log(values[1]);
  console.log(delete values[2]);
  console.log(typeof values[3]);
  //campound error
  let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
 console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
 console.log(names[0][1]); // -> Emma
 console.log(names[1][1]); // -> James
  
let femaleNames = names[0];
 console.log(femaleNames[0]); // -> Olivia
 console.log(femaleNames[2]); // -> Mia
 console.log(names[0][2]);
 console.log(names[0][3]);
 console.log(names[0][0]);
 console.log(names[1][1]);
 let users =[
      {
       name: "Calvin",
       surname: "Hart",
       age: 66,
        email: "CalvinMHart@teleworm.us"
      },
       {
       name: "Mateus",
         surname: "Pinto",
         age: 21,
       email: "MateusPinto@dayrep.com"
       },
       {
        name:"Aime",
        email:"amelyne@gmail.com",
        age:24
       }
     ];
        
     console.log(users[0].name); // -> Calvin
     console.log(users[1].age); // -> 21
     
     console.log(typeof days); // -> object
     user2[2] = {

     }
     users[2] = {
          name: "Irene",
         surname: "Purnell",
           age: 32,
         email: "IreneHPurnell@rhyta.com"
          
         }
           
         console.log(users[0].name); // -> Calvin
         console.log(users[1].name); // -> Mateus
         console.log(users[2].name); // -> Irene
  
  

  










