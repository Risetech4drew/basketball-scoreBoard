let homeEl = document.getElementById('content-el');
let guestEl = document.getElementById('guest-el');

let homeCount = 0;
let guestCount = 0;
// home functions

function homePlusOne() {

    homeCount += 1

    // console.log("btn clicked")
    homeEl.textContent = homeCount;
}

function homePlusTwo() {
    homeCount += 2;
    homeEl.textContent = homeCount;

}

function homePlusThree() {
    homeCount += 3;
    homeEl.textContent = homeCount;
}

//Guest functions

function guestPlusOne() {
    guestCount += 1;
    guestEl.textContent = guestCount;
    
}

function guestPlusTwo() {
    guestCount += 2;
    guestEl.textContent = guestCount;
}

function guestPlusThree() {
    guestCount += 3;
    guestEl.textContent = guestCount;
}

// restart function

function restart() {
    
    homeCount = 0;
    guestCount = 0;

    homeEl.textContent = homeCount;
    guestEl.textContent = guestCount;

}