/*
step-1: add event handler with the withdraw button
step-2: get the withdraw amount.
step-3: cleat the withdraw field.
step-4: get the previous withdraw total
step-5: calculate total withdraw amount and set it to the withdraw element
step-6: get previous balance
step-7: calculate new balance and set it to the balance total element

*/
// step-1:
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step-2:
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step-3:
  withdrawField.value = "";

  // step-4:
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step-5:
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = newWithdrawTotal;

  // step-6:
  const balanceElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //  step-7:
  const newTotalBalance = previousBalanceTotal - newWithdrawAmount;
  balanceElement.innerText = newTotalBalance;
});
