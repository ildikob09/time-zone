function showTime(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "") {
      alert("💙");
    }
    if (event.target.value === "red") {
      alert("❤");
    }
    if (event.target.value === "yellow") {
      alert("💛");
    }
  }
}

let colorsSelect = document.querySelector("#colors");
colorsSelect.addEventListener("change", showHeart);

let paris = document.querySelector("#paris");
let ParisTime = moment.tz("Europe/Paris").format("dddd, MMMM D, yyyy h:mm a");

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", displayTime);
