window.onload = function () {
    let  seconds = 0;
    let tens = 0;

    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    let startStopBtn = document.getElementById("start-stop-btn");
    let resetBtn = document.getElementById("reset-btn");

    let Interval;

    startStopBtn.onclick = function() {
        clearInterval(Interval);
        if (startStopBtn.textContent == "Start") {
            Interval = setInterval(startTimer, 10);
            startStopBtn.textContent = "Stop";
            document.body.style.animation = "colorChange 5s infinite"
            startStopBtn.style.boxShadow = "10px -10px 0 0 #404040";
        } else {
            clearInterval(Interval);
            startStopBtn.textContent = "Start";
            document.body.style.animation = "";
            startStopBtn.style.boxShadow = "none";
        }
    }

    resetBtn.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds= "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        startStopBtn.textContent = "Start";
        document.body.style.animation = "";
        startStopBtn.style.boxShadow = "none";
    }

    function startTimer() {
        tens++;

        if(tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if  (tens > 99) {
            // console.log(seconds);
            seconds++;
            appendSeconds.innerHTML = "0"+ seconds;
            tens= 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}

// animation

const square1 = document.querySelector(".square-1");
const square6 = document.querySelector(".square-6");

function creditsEnter(e) {
    
    const creditDiv = document.createElement("div");
    creditDiv.setAttribute("class" , "credit-div text-center");

    e.target.appendChild(creditDiv);

    const creditTitle = document.createElement("p");
    creditTitle.setAttribute("class" , "credit-title");
    const creditAuthor = document.createElement("p");
    creditAuthor.setAttribute("class" , "credit-author");
    const creditProfile = document.createElement("p");
    creditProfile.setAttribute("class" , "credit-profile");
    creditDiv.appendChild(creditTitle);
    creditDiv.appendChild(creditAuthor);
    creditDiv.appendChild(creditProfile);


    creditTitle.textContent = "Created By:";
    creditAuthor.textContent = "Hemant Rai";
    creditProfile.textContent = "Go to Profile";
}

function creditsLeave() {
    const creditDiv = document.querySelector(".credit-div");
    if (creditDiv) {
        creditDiv.remove();
    }
}

square1.addEventListener("mouseenter", creditsEnter);
square6.addEventListener("mouseenter", creditsEnter);

square1.addEventListener("mouseleave", creditsLeave)
square6.addEventListener("mouseleave", creditsLeave)
