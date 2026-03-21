/**
 *  Question 5: Calculating the Time Remaining for a Sale
Write a function calculateTimeRemaining that calculates the remaining time between two timestamps in hours, minutes, and seconds.
 */


function calculateTimeRemaining(startTime, endTime) {
  //your code here
  let starttime = new Date(startTime) ;
  let endtime = new Date(endTime); 
  let remaining_time = endtime - starttime;


  // converting the difference into hours,minutes, seconds 
  const total_second = Math.floor(remaining_time/1000);
  const hours = Math.floor(remaining_time/3600); 
  const minutes = Math.floor((total_second%3600)/60); 
  const seconds = total_second%60

  return {hours,minutes,seconds};
}

// Example usage
console.log(calculateTimeRemaining("2024-12-18T00:00:00Z", "2024-12-31T23:59:59Z"));
// Output: { hours: 359, minutes: 59, seconds: 59 }

console.log(calculateTimeRemaining("2024-12-18T12:00:00Z", "2024-12-19T14:30:45Z"));
// Output: { hours: 26, minutes: 30, seconds: 45 }