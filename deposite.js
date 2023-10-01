document.getElementById('btn-deposite').addEventListener('click', function(){
    // step-2 
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString)


    // step-3 deposite total amount
    const depositeTotalElement = document.getElementById('deposit-total')
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString)
// step-4 add set the total deposite
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = currentDepositeTotal;

    // step-5 get the current balance
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    // step-6 calculate current total
    const currantBalanceTotal = previousBalanceTotal + newDepositeAmount;
     balanceTotalElement.innerText = currantBalanceTotal;
    depositeField.value = '';
    
})