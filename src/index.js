    function updateTime() {
   
   //melbourne time and date
    let melbElement = document.querySelector("#melb");
    let melbDateElement = melbElement.querySelector(".date");
    let melbTimeElement = melbElement.querySelector(".time");
    let melbTime = moment().tz("Australia/Melbourne");

    melbDateElement.innerHTML = moment().format('MMMM Do YYYY');
    melbTimeElement.innerHTML = melbTime.format("h:mm:ss [<small>]A[</small>]");

 //Tokyo time and date
    let tokyoElement = document.querySelector("#tokyo");
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = moment().format('MMMM Do YYYY');
    tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

    };

    updateTime();
    setInterval(updateTime, 1000);

 