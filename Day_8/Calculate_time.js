/*. Calculate total hours passed between two time
Accepted input format example "9:00 AM"
Ex: calculateTotalHoursElapsed("9:00 AM", "10:00 AM") //Output 1 Hour
Ex: calculateTotalHoursElapsed("9:00 AM", "3:12 PM") // Output 6 Hour 12 minutes*/


function calculateTotalHoursElapsed(startTime, endTime) {
  // Split start time
  let startParts = startTime.split(" ");
  let startTimeParts = startParts[0].split(":");
  let startHour = parseInt(startTimeParts[0]);
  let startMinute = parseInt(startTimeParts[1]);
  let startPeriod = startParts[1];

  // Convert start time to 24-hour format
  if (startPeriod === "PM" && startHour !== 12) {
    startHour += 12;
  }
  if (startPeriod === "AM" && startHour === 12) {
    startHour = 0;
  }

  // Split end time
  let endParts = endTime.split(" ");
  let endTimeParts = endParts[0].split(":");
  let endHour = parseInt(endTimeParts[0]);
  let endMinute = parseInt(endTimeParts[1]);
  let endPeriod = endParts[1];

  // Convert end time to 24-hour format
  if (endPeriod === "PM" && endHour !== 12) {
    endHour += 12;
  }
  if (endPeriod === "AM" && endHour === 12) {
    endHour = 0;
  }

  // Convert both times to total minutes
  let startTotalMinutes = startHour * 60 + startMinute;
  let endTotalMinutes = endHour * 60 + endMinute;

  // Calculate difference
  let diffMinutes = endTotalMinutes - startTotalMinutes;
  let hours = Math.floor(diffMinutes / 60);
  let minutes = diffMinutes % 60;

  // Build result string
  let result = "";
  if (hours > 0) {
    result += hours + " Hour";
    if (hours > 1) result += "s";
  }
  if (minutes > 0) {
    if (result !== "") result += " ";
    result += minutes + " minute";
    if (minutes > 1) result += "s";
  }

  return result || "0 Hours"; // Return "0 Hours" if no time has passed
}

// Examples
console.log(calculateTotalHoursElapsed("9:00 AM", "10:00 AM")); 
