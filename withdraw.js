document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number')
        return;
    }


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrwaTotalString = withdrawTotalElement.innerText;
    const previousWithdrwaTotal = parseFloat(previousWithdrwaTotalString)


    

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    if(newWithdrawAmount > previousBalanceTotal){
        alert('bap er bank e eto taka nai')
        return;
    }
    const currentWithdrawTotal = previousWithdrwaTotal + newWithdrawAmount; 
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    withdrawField.value = '';


     
})