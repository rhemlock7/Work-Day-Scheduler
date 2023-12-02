// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // Grab all time blocks
  let scheduledEvents = [];
  const timeBlock = $('.time-block')

  // When the button within time-block div is clicked, call the function.
  timeBlock.on("click", ".btn", function () {
    // Accept an inpu
    let buttonId = $(this).attr('id');
    let input = $(this).siblings('.description').val().trim();

    // Save user input in local storage
    localStorage.setItem(buttonId, input)
    console.log("registered to local storage")
  })



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  const currentMilTime = dayjs('2023-12-1T011:00').format('H');
  const textAreaId = $('textarea').attr('id');

  if (currentMilTime === textAreaId) {
    timeBlock.addClass('present')
    console.log("present working")
  } else if (currentMilTime > textAreaId) {
    timeBlock.addClass('past')
    console.log("past working")
  } else {
    timeBlock.addClass('future')
  }

  console.log("text area id = " + textAreaId)
  console.log("current time = " + currentMilTime)



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Change textContent of buttonId's parent to === localStorage values
  for (i = 9; i < 17; i++) {
    $('#' + i).text(localStorage.getItem("button-" + i));
  }

  // COMPLETE: Add code to display the current date in the header of the page.
  const now = dayjs().format('dddd, MMMM D, YYYY');
  const dateParagraph = $("#currentDay");
  dateParagraph.text(now);
});
