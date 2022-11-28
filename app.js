document.querySelectorAll('.btn').forEach((item) => {
item.addEventListener('click', () => {
    alert ('Hello World')
})
})

// let
let name = 'Nathan';
let age = '21';
console.log (age)
console.log(name);

// var
var country = 'Nigeria';
console.log (country);
var tribe = 'yoruba'
console.log (tribe);

// const
const pie = '3.142';
console.log (pie);

var gender = 'male';
var gender = 'female';
// (reassign   let-declare, redeclare, reassign)
gender= 'trangender';        
console.log (gender);

// lets-----declare, and reassign
let state='lagos';
// let state='Delta';
state='Delta';
console.log(state);


// const-----declare

const fullname= 'Chris';
// const fullname= 'Okotie';
console.log (fullname);

// constrains in variables meaning
// variable names can only contain letters, numbers, underscore and dollar sign but cNNOT START WITH Number
// DNT GIVE SPACES BETWEEN VARIABLE NAMES, USE camel casing else.g fullname...uppercase is used to start the second word
// resrved names cannot be used as a variable name
// when using variable,use meaningful names, be descriptive
// do not start variable with uppercase except for const5

// data Types
// strings
let continent= 'Africa';
console.log (continent);
let firstName= 'Sandra';
let lastName= 'lekan';
let fullName= firstName +' '+ lastName;

console.log(firstName);
console.log(lastName);
console.log (fullName);

// String properties and methods
// lenght
let email=' sandraonachukwu@gmail.com';
console.log (email.length);
// getting position
let city='surulere'
console.log (city[1]);

// string methods
let trainee='damilare';
console.log(trainee);
// to uppercase, lowercase,
let traineeuppercase = trainee.toUpperCase();
console.log(traineeuppercase);
// indexof, lastindexof
let newemail='techstudio@gmail.com';
console.log(newemail);
let newemailIndexof = newemail.indexOf('h')
console.log(newemailIndexof);
let applicant= 'raphael';
console.log (applicant);
let lastindexofapplicant = applicant.lastIndexOf ('a')
console.log (lastindexofapplicant)
// slice
let religion= 'christianity';
console.log(religion);
let sliceReligion = religion.slice(0,6);
console.log (sliceReligion)
//replace
let profession = 'developer'
console.log (profession)
let replaceprofession= profession.replace ('d', 'z')
console.log(replaceprofession);

let Country= 'Nigeria';

console.log(Country)
let State= 'Edo';

console.log(State)

// let Continent= 'Africa';

// console.log(Continent)

// numbers
let year= '2023';
console.log(year);

let Score='100';
console.log(Score);

let score2='200';
console.log(score2);

// math operators
//+ - / * ** %

let finalscore= Score + score2;
console.log(finalscore)

let minus=Score-score2
console.log(minus);

let multiply=Score*score2
console.log(multiply);

let divide=score2/Score
console.log(divide);

console.log (200 ** 4);

let num=20;
console.log (num);
let num2=3;
console.log (num2);

let indices= num ** num2;
console.log(indices);

let modules=num % num2;
console.log (modules);

 // Boolean
// null
// undefined
// Object(arrays, data)
    //arrays; used for storing a collection of data, denoted by square brackets 

let lekanfavfoods= ['beans','banga','yam','agbado'];
console.log(lekanfavfoods);

//array properties

let lenghtoflekanfavfoods=lekanfavfoods.length
console.log(lenghtoflekanfavfoods);

console.log(lekanfavfoods[0])
lekanfavfoods[0] ='plantain'    
console.log(lekanfavfoods)

let includes= lekanfavfoods.includes('corn')
console.log(includes)

let join= lekanfavfoods.join('**')
console.log(lekanfavfoods);

let concat=lekanfavfoods.concat(['eguisi','ogbono'])
console.log(concat);

let push= lekanfavfoods.push('efo-riro')
console.log(push);
console.log(lekanfavfoods);

let pop= lekanfavfoods.pop()
console.log(lekanfavfoods);

let colors=[]
colors.push('pink')
colors.push('orange')
// console.log(colors);
// colors [0]='pink'
console.log(colors);

// symbols
// BigInt


//Assignment
let animal='hippopotamus';
console.log (animal);
let animaluppercase = animal.toUpperCase();
console.log(animaluppercase);

let Animal='HIPPOPOTAMUS';
console.log (Animal);

let AnimalLowercase = Animal.toLowerCase();
console.log(AnimalLowercase);

let animalIndexof = animal.indexOf('t')
console.log(animalIndexof);

let lastindexofanimal = animal.lastIndexOf ('o')
console.log (lastindexofanimal);

let sliceanimal = animal.slice(5,8);
console.log (sliceanimal);

let replaceanimal= animal.replace ('h', 'b')
console.log(replaceanimal);

//incremental and decremental
year++;
console.log(year);

let newyear= year+1;
console.log(newyear);

year--;
console.log(year);

year+= 2;
console.log(year);

year*= 2;
console.log(year);

//Assigmnent2
let Continent= 'Africa';
console.log (continent);
let language= 'pidginEnglish';
console.log (language);
let ghanapopulation= '500';
console.log (ghanapopulation);
let finlandpopulation= '800';
console.log (finlandpopulation);
let Country1= 'nigeria';
console.log (Country1);
let nigeriapopulation= '1000';
console.log (nigeriapopulation);


let Divide=nigeriapopulation/2
console.log(Divide);

nigeriapopulation++;
console.log(nigeriapopulation);

// let greaternigeria=nigeriapopulation+ '>' + finlandpopulation
// console.log(greaternigeria);
console.log(nigeriapopulation > finlandpopulation)

// let lesspopulation= ghanapopulation+ '<' + finlandpopulation
// console.log(lesspopulation);
console.log(ghanapopulation > finlandpopulation);


// let description= 'nigeria is in africa and its nigeriapopulation speaks pidginEnglish'
// console.log(description);
let description= Country1 +' '+'is in'+' '+continent+' '+"and it's "+' '+nigeriapopulation +' '+'people speak'+' '+language
console.log(description);
// (it\'s)
//concatinating variables with strings
let blog= '50';
let statement = 'the blog has '+ blog + ' likes'
console.log(statement);

let traineeScore = '90';
let traineeName='Sandra';
let school= 'Aguda grammar school';
let response='Theresa did you know that '+ traineeName + ' attends ' + school + ' and scored ' + traineeScore +
' in her test?'
console.log(response);

//Template litrals or strings (uses backticks and interpolation)
let newresponse=`Theresa did you know that ${traineeName} attends ${school} and scored ${traineeScore} in her test?`
console.log(newresponse);

let classavailable='Javascript fullstack course';
let bootcamp= 'Techstudio Academy';
let statelocation='lagos';
let regfeeinnaira= '300';
let prospectiveTrainee= 'Lekan';

let adminSay ='Hello ' + prospectiveTrainee + bootcamp + ' offers ' + classavailable + ' in ' +statelocation
+ ' and the registration fee in naira is ' + regfeeinnaira;
console.log(adminSay);

let newadminsay=  `Hello ${prospectiveTrainee}, ${bootcamp} offers ${classavailable} in ${statelocation
    } and the registration fee in naira is ${regfeeinnaira}`;
    console.log(newadminsay);

//spread operator and destructuring
let numbers=[1,2,3,4,5,6]
let newnumbers=[7,8,9,10]
// console.log (numbers + newnumbers);
let allnumbers= numbers.concat(newnumbers)
console.log(allnumbers);
//spread operators(..., used for joining items and listing)
let newcon=[...numbers, ...newnumbers]
console.log(newcon);
let numbers2=numbers[0]
let numbers3=numbers[1]
console.log(numbers2);
console.log(numbers3);

//destructuring
let names=['Emma','Theresa','Lekan','sandra','iyanu','Raphael','wisdom','Abubakar']
console.log(names[0])
console.log(names[5])
// let[zero, second, third, nigeria]= names
let[zero,, third, nigeria, ...list]= names
console.log(zero);
console.log(nigeria);
console.log(...list);

//type of
let scoress=50
console.log(scoress);
console.log(typeof scoress);
let pikinname= 'Akin';
console.log(pikinname);
console.log(typeof pikinname);
let pc= ['dell','macbook','hp', 'macbook',]
console.log(pc);
console.log(typeof pc);
let cart=null;
console.log(cart);
console.log(typeof cart);
let destination
console.log(destination);
console.log(typeof destination);


//Assignment 2
let Trainee=['Abubakar','nathan','Jeje', 'damilare-f','shola', 'Wisdom',
       'akin','chris','Theresa','sandra','ilias','segun','Raphael','emma',
    'lekan','iyanu','damilare-b','wahab']
    console.log(Trainee);

   Trainee [0]='pappi';
   console.log(Trainee);

   let Push = Trainee.push('Amos','Mike')
   console.log(Push);
   console.log(Trainee);

   let Pop = Trainee.pop()
   console.log(Trainee);

   let unshift = Trainee.unshift('zack','bobby')
   console.log(unshift);
   console.log(Trainee);

   let shift = Trainee.shift()
    console.log(Trainee)

   let newtrainee=['queen','segun','pius','emeka']

   let alltrainees=[...Trainee, ...newtrainee]
   console.log(alltrainees);

   //conversion and coercion
   //conversion is when we manually convert from one data type to another but coercion is when
   //when Js does the conversion behind the scenes

   //conversion
//   let inputYear='1985'
//   console.log(inputYear);
  let inputYear= Number('1985')
  console.log(inputYear);

  let Newnumber= Number ('1986')
  let addednumber= Newnumber+ 18
//   let addednumber= Number (Newnumber) + 18
  console.log(addednumber);

  let personname= Number ('Eggy');
  console.log(personname);
  //not a number because it is not a valid number recognized


  //coercion);
console.log('i am 22 years old');
console.log('i am' + String(22) +'years old');
console.log('22'* 3);
console.log('22'> 3);
// let z= Number('1') + 1
// let w= z-1
// console.log(w)

let z= '1' + 1
let w= z-1
console.log(w);


//comparism operators
// >, <, ==, ===, !=,!== >=, <=

let YEAR= 2023
console.log(YEAR > 2021)
console.log(YEAR < 2021)
console.log(YEAR >= 2021)
console.log(YEAR <= 2021)
console.log(YEAR != 2021)

//loose comparision operator== only checks for value and not data type
let SCORE='100'
let SCORE2= SCORE==100
let SCORE3 = SCORE != 100
console.log(SCORE2)
console.log(SCORE3)

let SCORE4= SCORE===100
let SCORE5= SCORE!==100

console.log(SCORE4)
console.log(SCORE5)

//control flow-loops and conditional statements

console.log('lifting weight repetition 1 🏋️‍♀️');
console.log('lifting weight repetition 2 🏋️‍♀️');
console.log('lifting weight repetition 3 🏋️‍♀️');
console.log('lifting weight repetition 4 🏋️‍♀️');
console.log('lifting weight repetition 5 🏋️‍♀️');
console.log('lifting weight repetition 6  🏋️‍♀️');
console.log('lifting weight repetition 7 🏋️‍♀️');
console.log('lifting weight repetition 8 🏋️‍♀️');
console.log('lifting weight repetition 9 🏋️‍♀️');
console.log('lifting weight repetition 10 🏋️‍♀️');

//for loop
// uses for keyword, initializer, condition, final expression

for (let i=0; i < 10; i++) {
    console.log('lifting weight repetition' + i +'🏋️‍♀️')
}

let Guys = ['Emma','lekan','akin','Iyanu','Raphael','Nathan']
console.log(Guys.length)
for (let i=0; i < Guys.length; i++) {
    console.log(Guys[i].toUpperCase())
}

//while loop
// let i=0
// while (i < 10) {
//     console.log(i)
// }
// let i= 0
// while (i < Guys.length) {
//     console.log(Guys[i])
//     i++
// }
//for in loop
let babes = ['sandra','theresa','fatima','ada']
for (let p in babes){
    console.log(babes[p])
}

//for-of loop
for (let b of babes) {
    console.log(b.toUpperCase())
}
//conditional statement if,else, else if..if is the entry point into the code
let AGE= 50
if (AGE===500) {
    console.log ('you don get am')
}else{
    console.log ('invalid')
}

let password= 'pass';
console.log(password.length);
if(password.length >= 12){
    console.log ('that\'s a very strong password');
}else if(password.length >= 8){
    console.log ('password is good');
    
}else if(password.length >=4){
    console.log('password is weak');
} else {
    //alert ('please password should be at least 4 characters long');
    console.log ('please password should be at least 4 characters long');
}

//Assignment 3
let Colors=['blue','pink','black','red']
//for loop
console.log(Colors.length)
for (let i=0; i < Colors.length; i++) {
    console.log(Colors[i].toUpperCase())
}
//while loop
let i = 0
while (i < Colors.length) {
    console.log(Colors[i])
    i++
}
//for in loop
for (let s in Colors){
    console.log(Colors[s])
}
//for of loop
for (let t of Colors) {
    console.log(t.toUpperCase())
}

//logical operators
// ||double pipe means logical or
//&& ampersand means logical and

// for logical and
//True && true= true
//true && false= false
//false && true= false
//false && false= false

console.log( true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// for logical or
//True || true= true
//true || false= true
//false || true= True
//false || false= false

console.log( true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

let PASSWORD= 'pass@';
if (PASSWORD.length >= 7 && PASSWORD.includes ('@')) {
console.log('super strong password');
}else if (PASSWORD.length >= 5|| PASSWORD.includes('-') && PASSWORD.length > 6 ||
PASSWORD.includes ('@')){
    console.log('password is good');
}else{
    console.log('password is\'nt good');
} 

// let newPassword= prompt('type a password')
// if(newPassword.length >=12 && newPassword.includes('@')){
//     alert('very strong password');
// }else{
//     alert('password is\'nt good');  
// }

//Break and continue

let Result= [20, 40, 0, 50, 100, 15, 1, 5, 8, 9, 11];
for (let i=0; i < Result.length; i++) {
    if(Result[i]=== 0 || Result[i]=== 50){continue}

    if(Result[i]=== 100) {break}
    console.log(Result[i])
}
//given an integar, n, perform the following conditional action.
//if n is odd, print odd; if n is even, print even.

// let n= prompt('please type a number')
// if (n % 2 === 0){
//     alert('even')
// } else{
//     alert('odd')
// }

//switch statement------ does the same thing with the if function...syntax is a switch key word
// cases is used and not 'else if'. we can have multiple cases.

let points= 'a'
if (points === 'f'){
    console.log ('you got a')
}else if(points === 'b'){
    console.log ('you got b')
}else if(points === 'c'){
    console.log ('you got c')
}else if(points === 'd'){
    console.log ('you got d')
}

else{
    console.log ('Guy you don fail')
}

//switch
let grade= 'a'
switch (grade) {
    case 'a' :
        console.log('you got a');
        break
    case 'b' :
        console.log('you got b');
        break
    case 'c':
    console.log('you got c');
    break
    case 'd':
        console.log('you got d');
        break
    default :
        console.log('Guy you don fail');
}

//exercise5
let SandraWeight= 60;
let SandraHeight= 10;
let EmmaWeight= 70;
let Emmaheight =9;

let SandraBmi= SandraWeight/SandraHeight ** 2;
console.log(SandraBmi);


let EmmaBmi= EmmaWeight/Emmaheight **2;
console.log(EmmaBmi);

if (SandraBmi > EmmaBmi){
    console.log('SandraBmi is greater than EmmaBmi');
}else {
    console.log('EmmaBmi is greater than SandraBmi');
}
//Global scope, block and function scope
let AGES= 1000

//Global scope
// if (true){
//     console.log('inside 1st code block: ' + AGES)
// }
// console.log('outside block of code block: ' + AGES)

//BLOCK SCOPE
// if (true){
//     let AGES=2000
//     console.log('inside 1st code block: ' + AGES)
// }
// console.log('outside block of code block: ' + AGES)

//FUNCTION SCOPE
if (true){
    let AGES=2000
    console.log('inside 1st code block: ' + AGES);
    if (true){
        let AGES=3000
                console.log('inside 2nd code block:'+ AGES)
}
}
console.log('outside block of code block: ' + AGES)

//Assigment 6


let totalspartan= 60+70+80
console.log(totalspartan);

let averagespartan= totalspartan/3
console.log(averagespartan);

let totalalpha=88+91+120
console.log(totalalpha);

let averagealpha= totalalpha/3
console.log(averagealpha);

if (averagespartan > averagealpha){
    console.log('Spartans are the winners of the competition');
}else {
    console.log('Alphas are the winners of the competition');
}
//Tenary operators

let winner = averagealpha > averagespartan ? 'alphas are winners': 'spartans are winners';
console.log(winner);
