let date = new Date();
let month = date.getMonth() + 1;
let newDate = date.getDate() + 3;

document.getElementById('button').onclick = function(){

    document.getElementById('thankYou').innerHTML = "Thank you for your submission";
    document.getElementById('message').innerHTML = "You can expect to hear back from us in 3 busuiness days";
    document.getElementById("currentDate").innerHTML = `Todays date is ${month}-${date.getDate()}, expect to hear back from us by ${month}-${newDate}`;

}

