
let events = [];

function addEvent() {
  let eventBox = document.getElementById("event");
  let eventName = eventBox.value;

  if (eventName == "") {
    alert("Please enter an event name.");
    return;
  }

  if (events.length >= 3) {
    alert("You can join a maximum of 3 events.");
    return;
  }

  events.push(eventName);

  document.getElementById("event").value = "";
  alert("Event Added");
}

function confirmRegistration() {
  let name = document.getElementById("studentName").value;

  if (name == "") {
    alert("Please enter your name before confirming.");
    return;
  }

  if (events.length == 0) {
    alert("Please add at least one event before confirming.");
    return;
  }

  localStorage.setItem("studentName", name);
  
  localStorage.setItem(
	"events", 
	JSON.stringify(events));

  window.location.href = "confirm.html";
}
