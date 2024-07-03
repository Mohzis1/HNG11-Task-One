//Javascript codes to run the time and day of the week

const currentTimeElement = document.getElementById('currentTime');
const currentDayElement = document.getElementById('currentDay');

function updateDateTime() {
  const date = new Date();
  const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedDay = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  currentTimeElement.textContent = formattedTime;
  currentDayElement.textContent = formattedDay;
}

updateDateTime(); // Call the function initially to display time on page load
setInterval(updateDateTime, 1000); // Update time every second