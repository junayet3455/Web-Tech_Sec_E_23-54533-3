
let name = localStorage.getItem("studentName");
let events = JSON.parse(localStorage.getItem("events")) || [];

let summary = document.getElementById("summary");

let html = "Name: " + name + "<br>";
html += "Events:<br>";

for (let i = 0; i < events.length; i++) {
    html += events[i] + "<br>";
}

let totalFee = events.length * 150;
html += "Total Fee: " + totalFee + " Taka";

summary.innerHTML = html;

function goBack() {
    window.location.href = "index.html";
}
