
var totAmountDonated = 2000;

function myFunctionDonate(){
    var amountDonated = document.getElementById("donationAmount").value;
    checkAmount = parseFloat(amountDonated);

    //alert(checkAmount * 2)

    if (checkAmount < 0) {
        alert("amount shoud be more than 0");
    } else {
        totAmountDonated = totAmountDonated + checkAmount;
        alert("Thanks for your donation of $ " + checkAmount);
        alert("Total anount donated so far is $ " + totAmountDonated);
    }
    return totAmountDonated;
}

