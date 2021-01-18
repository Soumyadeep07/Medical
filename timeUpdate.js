
function google() {
    document.getElementById("go").href = (("https://www.google.com/search?q=") + document.getElementById("searchBar").value);
}

// var el = document.getElementById('searching');
// if (el) {
//     el.addEventListener('click', swapper, false);
// }

var inputtext = document.getElementById("searchBar");
inputtext.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("go").click();
    }
});

let color = 1;

setInterval(() => {
    a = new Date();
    b = a.getDay();
    let day;
    if(b==1) day = "Mon";
    else if(b==2) day = "Tues";
    else if(b==3) day = "Wed";
    else if(b==4) day = "Thurs";
    else if(b==5) day = "Fri";
    else if(b==6) day = "Sat";
    else day = "Sun";
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let indDate = a.toLocaleString("en-GB", { timeZone: "Asia/Kolkata" });
    document.getElementById("time").innerText = day + ", " + indDate;
    temp=parseInt(indDate.slice(12,14));

    if(color==1){
        document.getElementById("time").className = "mx-auto flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none rounded text-lg bg-gradient-to-r from-green-600 to-blue-600";
        color = 2;
    } 
    else if(color==2){
        document.getElementById("time").className = "mx-auto flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none rounded text-lg bg-gradient-to-r from-blue-600 to-red-600";
        color = 3;
    }
    else{
        document.getElementById("time").className = "mx-auto flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none rounded text-lg bg-gradient-to-r from-red-600 to-green-600";
        color = 1;
    }

}, 1000);

