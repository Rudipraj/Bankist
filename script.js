// 'use strict';
// const bookings = [];

// const createBooking = function(flightNum,numPassengers = 1,price = 199){
    
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// } 
// createBooking('LH123');
// createBooking('LH123',3,1400);

// const flight = 'LH354'
// const rudeep = {
//     name : 'Rudeep',
//     passport : 7483156
// }
// const checkIn = function (flightNum, passenger) {
//     flightNum = 'Lh999';
//     passenger.name = 'Mr. ' + passenger.name

//     if(passenger.passport === 7483156 ){
//         alert('checked in');
//     }
//     else{
//         alert('wrong passport')
//     }
// }
// checkIn(flight,rudeep)
// console.log(flight);
// console.log(rudeep )

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 455454565);    
// }
// newPassport(rudeep);
// checkIn(flight, rudeep);

// const Nepal = {
//     airline : 'Nepal Airlines',
//     iatacode : 'NP',
//     bookings : [],
//     book(flightNum, name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`);
//         this.bookings.push({flight: `${this.iatacode}${flightNum}`, name})
//     },
// } 
// Nepal.book(239, 'Rudeep Khatiwada'); 
// console.log(Nepal)

// const Batas = {
//     airline : 'Danfe Airlines',
//     iatacode: 'DAN',
//     bookings : [],
// }
// const book = Nepal.book;
// // book(23, 'Sarah Williams');
// // Call Method
// book.call(Batas, 23, 'Sarah Williams');
// console.log(Batas);
// book.call(Nepal,546, 'Sameer Aryal');
// console.log(Nepal)

// const Swiss = {
//     airline : 'Swiss Airlines',
//     iatacode : 'SWI',
//     bookings: [],
// };
// book.call(Swiss, 657, 'Bikash Pun');
// console.log(Swiss);

// //Apply Method
// const flightData = [230, 'George Cooper'];
// book.apply(Swiss, flightData);
// console.log(Swiss);

// book.call(Swiss, ...flightData);

// //bind Method

// const bookNP = book.bind(Nepal);
// const bookDAN = book.bind(Batas);
// const bookSWI = book.bind(Swiss);

// bookNP(89706, "Pabin Gurung");

// const bookNP23 = book.bind(Nepal, 23);
// bookNP23('Arun Tamang');
// console.log(Nepal)

// //with event Listeners

// Nepal.planes = 300;
// Nepal.buyPlane = function(){
//     console.log(this)
//     this.planes++
//     console.log(this.planes);
// }
// document.querySelector('.buy').addEventListener
// ('click', Nepal.buyPlane.bind(Nepal));

// //partial application

// const addTax = (rate,value) => value + value* rate;
// console.log(addTax(0.2,200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));  

// const poll = {
//     question : 'What is your best Premire League Team?',
//     options : ['0:Manchester United', '1:Liverpool','2:Manchester City','3:Chelsea'],
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){
//         const answer = Number(
//             prompt(`${this.question} \n ${this.options.join('\n')} \n(Write Option Number)`)
//         );
//         console.log(answer)
//             typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
//             this.displayResult();
//             this.displayResult('string');
//         },
//     displayResult(type = 'array'){
//         if(type === 'array'){
//             console.log(this.answers);
//         }
//         else if (type === 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}`)
//         }

//         }
// };
// document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))
// const array1 = [2,3,4,5,6,6,4316,345,6,7,243,5,65,756,,3456,64,645,6,546,5,452,6,34,6,46,5,6,546,346,4,35,35,,543,54,6,5436,3,6,5,5,43,65,54,64,56,45,6,543];
// let f;
// const g = function() {
//     const a = 23;
//     f = function() {
//         console.log(a*2)
//     }; 
// };

// const h = function() {
//     const b = 777;
//     f = function(){
//         console.log(b*2);
//     }
// }

// g();
// f();
// h();
// f();
// console.dir(f);

// const boardPassengers = function(n, wait){
//     // const perGroup = n/3;


//     setTimeout(function(){
//         console.log(`We are now boarding all ${n} passengers.`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers `);
//     },wait * 5000);
//     console.log(`Will start boarding in ${wait} seconds`);
// }
// const perGroup = 1000;
// boardPassengers(180, 3);

// (function(){
//     const header = document.querySelector('.head');
//     header.style.color = 'red';

//     document.body.addEventListener('click',function(){
//         header.style.color = 'blue';
       
//     })
// })();

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Rudeep Khatiwada',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300, 9990900],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Bikash Pun Magar ',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};
const account4 = {
  owner: 'Sameer Aryal',
  movements: [200, -200, 340, -300, -20, 50, 400, -460,6580956,3245,2,3,543454,-34345],
  interestRate: 0.7,
  pin: 5555,
};

const account5 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a,b) =>
  a-b): movements;

  movs.forEach(function(mov, i){
    const type = mov > 0 && mov != 10000 ? 'deposit': mov === 10000 ? 'salary' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value " >${mov}</div>
    </div>
    `
    containerMovements.insertAdjacentHTML("afterbegin", html)
  })
}


const calcDisplaySummary = function(acc){
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc,mov)=> acc+mov,0);
  labelSumIn.innerText = `रु ${incomes} `

  const outcomes = acc.movements.filter(mov => mov < 0 ).reduce((acc,mov) => acc+mov,0);
  labelSumOut.textContent = `रु ${Math.abs(outcomes)} `;

  const interest = acc.movements.filter(mov => mov > 0).
  map(deposit => (deposit * acc.interestRate) /100).filter((int,i) =>{
    return int >=1 }).reduce((acc, int) => acc + int,0);
  labelSumInterest.textContent = `रु ${interest} `;
};



const calcPrintBalance = function(acc){
  acc.balance = acc.movements.reduce((acc,mov) => acc + mov,0);
  labelBalance.textContent = `रु ${acc.balance}`;
}


const createUsernames = function(accs) {
  accounts.forEach(function(acc){
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  })
  }
  createUsernames(accounts);

  const updateUI = function(acc){
     
     //Display Movements 
     displayMovements(acc.movements);

     //Display BAlance
     calcPrintBalance(acc);

     //Display Summary
     calcDisplaySummary(acc);
  }

  ///Event Handlers
  let currentAccount;

  btnLogin.addEventListener('click', function(e){
    e.preventDefault();
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)){
      //DIsplay UI and Welcome Message
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
      containerApp.style.opacity = 100;
      //Clear input field
     inputLoginUsername.value = inputLoginPin.value = '';
     inputLoginPin.blur();

     updateUI(currentAccount);
     
    }
  })

  btnTransfer.addEventListener('click', function(e){
    e.preventDefault();

    const amount = Number(inputTransferAmount.value);
    const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value);
    console.log(amount, receiverAccount)
    inputTransferAmount.value = inputTransferTo.value = '';
    if (amount > 0 && currentAccount.balance >= amount && receiverAccount?.username !== currentAccount.username){
      
      //Doingg the transfer
      currentAccount.movements.push(-amount);
      receiverAccount.movements.push(amount);

      updateUI(currentAccount);
    }

  })
  btnLoan.addEventListener('click', function(e){
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);

    if(amount > 0 && currentAccount.movements.some(mov => mov >= amount/10)){
      //Add movemnet
      currentAccount.movements.push(amount);
      updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
  })


  btnClose.addEventListener('click', function(e){
    e.preventDefault();

    if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){

      const index = accounts.findIndex(acc=> acc.username === currentAccount.username)
  
      console.log(index);
      accounts.splice(index,1);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Login to Continue';
    }
    inputCloseUsername.value = inputClosePin.value ='';
  })
  let sorted = false;
  btnSort.addEventListener('click', function(e){
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
  });








/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// ///////////////////////////////////////////////////////////////
//  //Slice Method
// let arr = ['a','b','c','d','e']
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2))
// console.log(arr.slice(1,-2))
// console.log(arr.slice());
// console.log([...arr]);

// //Splice Method
// // console.log(arr.splice(2))
// arr.splice(-1);
// console.log(arr)

// //REVERSE
//  arr = ['a','b','c','d','e']
// const arr2 = ['w','a','f','w','p']
// console.log(arr2.reverse())
// console.log(arr2);

// //CONCAT

// const letters = arr.concat(arr2);
// console.log(letters);

// //JOIN
// console.log(letters.join('-'));

//LOOPING OVER ARRAYS

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [i, movement] of movements.entries()){
//   if(movement > 0){
//     console.log(`Movement : ${i+1} You deposited ${movement}`)
//   }
//   else{
//     console.log(`Movement : ${i+1} You withdrew ${Math.abs(movement)}`)
//   }
// }
// console.log('-----FOR EACH----------')
// movements.forEach(function(mov,i,arr){
//   if(mov > 0){
//     console.log(`Movement : ${i+1} You deposited ${mov}`)
//   }
//   else{
//     console.log(`Movement : ${i+1} You withdrew ${Math.abs(mov)}`)
//   }
// })

//MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function(value,key,map){
//   console.log(`${key}: ${value}`)
// })

// //SET
// const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
// console.log(currenciesUnique)

// currenciesUnique.forEach(function(value,key,map){
//   console.log(`${key}: ${value}`)
// })
//CODING CHALLENGE
// const checkDOgs = function(dogsJulia, dogsKate){
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0,1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs)

//   dogs.forEach(function(dog, i){
//     if(dog >= 3){
//       console.log(`Dog no ${i+1} is adult and is ${dog} years old`)
//     }
//     else{
//       console.log(`Dog no ${i+1} is still a puppy and is ${dog} years old`)
//     }
//   })
// }
// checkDOgs([3,4,6,8,12,2],[2,5,6,1,4,5,6]);

// const eurToUsd = 1.1;
// const movements = [3,4,6,8,12,2];
// // const movementsUSD = movements.map(function(mov){
// //   return mov * eurToUsd;
// // })
// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDFor = []

// for (const mov of movements){
//   movementsUSDFor.push(mov*eurToUsd);
// }
// console.log(`For ${movementsUSDFor}`)

// movements.map((mov,i,arr) => {

// })

/////-----FILTER-----///////
// const deposits = movements.filter(function(mov){
//  return mov > 0;
// });


// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(function(mov){
//   return mov < 0;
// })
// console.log(withdrawals); 

// /////-----REDUCE-----///////
// const balance = movements.reduce((acc,curr,i,arr) => acc + curr
// ,0);
// console.log(balance);

/// Max value of Movements array using reduce

// const max = movements.reduce((acc,mov) => {
//   if (acc > mov){
//     return acc;
//   }
//   else{
//     return mov;
//   }
// }, movements[0]);
// console.log(max)

// let max = 0;

// for (let i = 0; i < movements.length; i++){
// if (movements[i]> max){
//   max = movements[i];
// }
// }
// console.log(max);

// const calcAverageAge = function(ages){
//   const humanAges = ages.map(age => age<= 2 ? 2*age : 16+age*4);
//   console.log(humanAges);

//   const adultDogs = humanAges.filter(age => age >= 18);
//   console.log(adultDogs)

//   const averageAdultAge = adultDogs.reduce((acc, age) => acc+age,0)/adultDogs.length;
//   return averageAdultAge;

// }


//  const calcAverageHumanAge = ages => ages.map(age => age < 2 ? age*2 : 16+age*4).filter(age => age >=18).reduce((acc,age,i,arr) => acc + age/arr.length,0);

// const avg1 = calcAverageHumanAge([2,3,56,76,,32,2,6,7,54]);
// const avg2 = calcAverageHumanAge([12,23,4,1,3,3,4,4,5]);
// console.log(avg1,avg2);
// console.log(movements)
// console.log(movements.includes(-130));

// const anyDeposits = movements.some(mov => mov> 5000);
// console.log(anyDeposits)

// const owners = ['jonas', 'jack', 'adams', 'martha'];
// console.log(owners);
// console.log(owners.sort());
// console.log(owners)

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// //return < 0, A,B(keep order)
// //return > 0, B,A(switch order)
// //Ascending order
// movements.sort((a,b) => {
//   if (a > b){
//     return 1;
//   }
//   else if (b > a){
//     return -1
//   }
// }  );
// console.log(movements)

///Practicesssssssssssssssssssssssssssssssssssss

// const bankDepositSum = accounts.flatMap( acc => acc.movements).filter(mov => mov > 0).reduce((acc,curr)=> acc+curr);
// console.log(bankDepositSum)

// const numDeposits1000 = accounts.flatMap(acc => acc.movements)
// .reduce((count, cur) => (cur >=1000 ? count+1 : count),0);
// console.log(numDeposits1000);

// let a = 10;
// console.log();

// const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements)
// .reduce((sums,curr) => {
//   // curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
//   sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
//   return sums;
// }, {
//   deposits: 0,
//   withdrawals: 0
// })
// console.log(deposits,withdrawals)


// ///////////////
// const convertTitleCase = function(title){

//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a','an','the'];

//   const titleCase = title.toLowerCase()
//   .split(' ')
//   .map(word => (exceptions.includes(word)? word: capitalize(word))).join(' ');
//   return titleCase
// }

// console.log(convertTitleCase('this is a nice title'));
// const dogs = [
//   {
//     weight: 22, curFood : 250, owners : ['Alice','Bob']
//   },
//   {
//     weight : 8, currFood : 200, owners : ['Matilda']
//   },
//   {
//     weight: 13, curFood : 275, owners : ['Sarah','John']
//   },
//   {
//     weight : 32, curFood : 340, owners : ['Michael']
//   }
// ]
// //1
// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 *28)));
// console.log(dogs)

// //2
// const dogSarah = dogs.find(dog => dog.owners
//   .includes('Sarah'));
//   console.log(dogSarah);
//   console.log(`Sarah's dog is eating too ${dogSarah.currFood > dogSarah.recFood ?'much' : 'little'}`);

// ////////3

// const ownerEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
// console.log(ownerEatTooMuch);

// const ownerEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
// console.log(ownerEatTooLittle);

// console.log(`${ownerEatTooMuch.join(' and ')}'s dogs eat too much!`)
// console.log(`${ownerEatTooLittle.join(' and ')}'s dogs eat too little!`)

// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// ///6
// const checkEatingOkay = dog => dog.curFood > dog.recFood*0.9 && dog.curFood < dog.recFood * 1.1;
// console.log(dogs.some(checkEatingOkay));
// console.log(dogs.filter(checkEatingOkay).length);

// ///7

// const dogsSorted = dogs.slice().sort((a,b) => a.recFood-b.recFood);
// console.log(dogsSorted)
console.log(0.1+0.2);
