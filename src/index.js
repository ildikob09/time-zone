let paris = document.querySelector("#paris");
let ParisTime = moment.tz("Europe/Paris").format("dddd, MMMM D, yyyy h:mm a");
let sydney = document.querySelector("#sydney");
let sydneyTime = moment
  .tz("Australia/Sydney")
  .format("dddd, MMMM D, yyyy h:mm a");
let tokyo = document.querySelector("#tokyo");
let tokyoTime = moment.tz("Asia/Tokyo").format("dddd, MMMM D, yyyy h:mm a");

function showTime(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "tokyo") {
      alert(`It is currently ${tokyoTime} in Asia/Tokyo`);
    }
    if (event.target.value === "sydney") {
      alert(`It is currently ${sydneyTime} in Australia/Sydney`);
    }
    if (event.target.value === "paris") {
      alert(`It is currently ${ParisTime} in Europe/Paris`);
    }
  }
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", showTime);
