

/*check if amound donated is valid */
function myFunctionDonate(){
    var amountDonated = document.getElementById("donationAmount").value;
    checkAmount = parseFloat(amountDonated);

  

    if (checkAmount <= 0) {
        alert("amount shoud be more than 0");
    } else {
        alert("Thanks for your donation of $ " + checkAmount);
       
    }
    return totAmountDonated;
}

