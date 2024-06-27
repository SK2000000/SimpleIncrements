function clickCounter() {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML =
      "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, your browser does not support web storage...";
  }
}

function toggleMode() {
  const body = document.body;
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  }
}

function Updatedisplay() {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount);
    } else {
      localStorage.clickcount;
    }
    document.getElementById("result").innerHTML =
      "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, your browser does not support web storage...";
  }
}

Updatedisplay();
