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

    }

    function updateCity(event) {
        let cityTimeZone = event.target.value;
        if (cityTimeZone === "current") {
            cityTimeZone = moment.tz.guess();
        }
        let cityName = cityTimeZone.replace("_", " ").split("/")[1];
        let cityTime = moment().tz(cityTimeZone);
        let citiesElement = document.querySelector("#cities");
        citiesElement.innerHTML =  `
        <div class="city" >
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
    </div>
        `
    }

    updateTime();
    setInterval(updateTime, 1000);


    let citiesSelectElement = document.querySelector("#city");

    citiesSelectElement.addEventListener("change", updateCity)