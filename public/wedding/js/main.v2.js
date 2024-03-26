// (function () {
//   if (!isMobile) {
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('[data-scroll-container]'),
//         smooth: true
//     });
//   }
// })();

// Target date: June 15, 2024
function updateCountdown() {
	var targetDate = new Date("2024-06-15T15:00:00+08:00");

	// Current date
	var currentDate = new Date();

	// Calculate the difference in milliseconds
	var difference = targetDate - currentDate;

	// Convert milliseconds to days, hours, and minutes
	var days = Math.floor(difference / (1000 * 60 * 60 * 24));
	var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((difference % (1000 * 60)) / 1000);

	// Print out the remaining time
	let countdownElement = document.querySelector(".wedding-countdown");

	if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
		countdownElement.innerHTML = "";
	}

	if (days > 1) {
		countdownElement.innerHTML = days + " days until";
	} else if (days === 1) {
		countdownElement.innerHTML = days + " day until";
	} else if (hours > 1) {
		countdownElement.innerHTML = hours + " hours until";
	} else if (hours == 1) {
		countdownElement.innerHTML = hours + " hour until";
	} else if (minutes > 1) {
		countdownElement.innerHTML = minutes + " minutes until";
	} else if (minutes == 1) {
		countdownElement.innerHTML = minutes + " minute until";
	} else if (seconds > 1) {
		countdownElement.innerHTML = seconds + " seconds until";
	} else if (seconds == 1) {
		countdownElement.innerHTML = seconds + " second until";
	}

    // call this function again in 1000ms
    setTimeout(updateCountdown, 1000);
}

updateCountdown();

function showChurch() {
  let element = document.querySelector(".church-map");
  element.classList.add("visible");
  element.classList.remove("hidden");

  element = document.querySelector(".reception-map");
  element.classList.add("hidden");
  element.classList.remove("visible");

  document.querySelector(".church-map-btn").classList.add("active");
  document.querySelector(".reception-map-btn").classList.remove("active");
}

function showReception() {
  let element = document.querySelector(".reception-map");
  element.classList.add("visible");
  element.classList.remove("hidden");

  element = document.querySelector(".church-map");
  element.classList.add("hidden");
  element.classList.remove("visible");

  document.querySelector(".church-map-btn").classList.remove("active");
  document.querySelector(".reception-map-btn").classList.add("active");
}
