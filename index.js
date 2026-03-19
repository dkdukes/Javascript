//Declare variables
let balance=20000;
let isVerified=true;
let dailyLimitUsed=0;

//Balance function
function checkBalance(balance) {
  console.log(`Balance: ${balance}`);
}

//Deposit function
function Deposit(amount, balance) {
    if(amount<=0){
        console.log("Invalid deposit amount");
        console.log(`Balance: ${balance}`);
    }
    else{
        let finalBalance = balance + amount;
  console.log("Success");
  console.log(`Amount: ${amount}`);
  console.log(`Balance: ${balance}`);
  console.log(`New Balance: ${finalBalance}`);
    }
}

//Withdraw function
function Withdraw(balance, amount, isVerified, dailyLimitUsed) {
  if (amount <= 0) {
    console.log("Invalid withdrawal amount!");
  } else if (amount > balance) {
    console.log("Insufficient funds!");
  } else if (amount % 100 !== 0) {
    console.log("Amount must be multiples of 100");
  } else if (isVerified === false && amount > 5000) {
    console.log("Verification is required for large amounts");
  } else if (dailyLimitUsed + amount > 20000) {
    console.log("Daily limit reached!");
  } else if (amount >= 10000) {
    let fee = amount * 0.02;
    let remainingBalance = balance - fee - amount;
    console.log("Success");
    console.log(`Withdrawn: ${amount}`);
    console.log(`Fee: ${fee}`);
    console.log(`Remaining Balance: ${remainingBalance}`);
  } else {
    console.log("We are out of service, Try again!");
  }
}

//Handle the different processes of ATM
// const transactions = 4;
let option;
let actions=[1,2,3];
// let i = 1;
for (i = 0; i < actions.length; i++) {
  option=actions[i];
  switch (option) {
    case 1:
      checkBalance(balance);
      break;
    case 2:
      Deposit(5000, balance);
      break;
    case 3:
      Withdraw(balance, 12000, isVerified, dailyLimitUsed);
      break;
    default:
      console.log("Please input a valid option!");
  }
}
