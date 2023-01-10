// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function (){
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var hours = $(".hours")
  function readTextFromStorage() {
    var textContent = localStorage.getItem('textContent');
    if (inputTexts) {
      inputTexts = JSON.parse(textContent);
    } else {
      inputTexts = [];
    }
    return inputTexts;
    function saveProjectsToStorage(inputText) {
      localStorage.setItem('textContent', JSON.stringify(inputText));
  }
}
  function printProjectData() {
    // clear current projects on the page
    projectDisplayEl.empty();
  
    // get projects from localStorage
    var projects = readProjectsFromStorage();
  
    // loop through each project and create a row
    for (var i = 0; i < inputTexts.length; i += 1) {
      var project = projects[i];
    }
  }
  var saveBtn = $("saveBtn")

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function findCurrent(){
    if (parseInt($("#hour-9").attr('data-index')) === parseInt(dayjs().format('H'))){
      $("#hour-9").toggleClass("present")
    }
    if (parseInt($("#hour-9").attr('data-index')) > parseInt(dayjs().format('H'))){
      $("#hour-9").toggleClass("future")
    }
    if (parseInt($("#hour-9").attr('data-index')) < parseInt(dayjs().format('H'))){
      $("#hour-9").toggleClass("past")
    }
    if (parseInt($("#hour-10").attr('data-index')) === parseInt(dayjs().format('H'))){
      $("#hour-10").toggleClass("present")
    }
    if (parseInt($("#hour-10").attr('data-index')) > parseInt(dayjs().format('H'))){
      $("#hour-10").toggleClass("future")
    }
    if (parseInt($("#hour-10").attr('data-index')) < parseInt(dayjs().format('H'))){
      $("#hour-10").toggleClass("past")
    }
    if (parseInt($("#hour-11").attr('data-index')) === parseInt(dayjs().format('H'))){
      $("#hour-11").toggleClass("present")
    }
    if (parseInt($("#hour-11").attr('data-index')) > parseInt(dayjs().format('H'))){
      $("#hour-11").toggleClass("future")
    }
    if (parseInt($("#hour-11").attr('data-index')) < parseInt(dayjs().format('H'))){
      $("#hour-11").toggleClass("past")
    }
    if (parseInt($("#hour-12").attr('data-index')) === parseInt(dayjs().format('H'))){
      $("#hour-12").toggleClass("present")
    }
    if (parseInt($("#hour-12").attr('data-index')) > parseInt(dayjs().format('H'))){
      $("#hour-12").toggleClass("future")
    }
    if (parseInt($("#hour-12").attr('data-index')) < parseInt(dayjs().format('H'))){
      $("#hour-12").toggleClass("past")
    }
    if (parseInt($("#hour-13").attr('data-index')) === parseInt(dayjs().format('H'))){
      $("#hour-13").toggleClass("present")
    }
    if (parseInt($("#hour-13").attr('data-index')) > parseInt(dayjs().format('H'))){
      $("#hour-13").toggleClass("future")
    }
    if (parseInt($("#hour-13").attr('data-index')) < parseInt(dayjs().format('H'))){
      $("#hour-13").toggleClass("past")
    }
    if (parseInt($("#hour-14").attr('data-index')) === parseInt(dayjs().format('H'))){
      $("#hour-14").toggleClass("present")
    }
    if (parseInt($("#hour-14").attr('data-index')) > parseInt(dayjs().format('H'))){
      $("#hour-14").toggleClass("future")
    }
    if (parseInt($("#hour-14").attr('data-index')) < parseInt(dayjs().format('H'))){
      $("#hour-14").toggleClass("past")
    }
    if (parseInt($("#hour-15").attr('data-index')) === parseInt(dayjs().format('H'))){
      $("#hour-15").toggleClass("present")
    }
    if (parseInt($("#hour-15").attr('data-index')) > parseInt(dayjs().format('H'))){
      $("#hour-15").toggleClass("future")
    }
    if (parseInt($("#hour-15").attr('data-index')) < parseInt(dayjs().format('H'))){
      $("#hour-15").toggleClass("past")
    }
    if (parseInt($("#hour-16").attr('data-index')) === parseInt(dayjs().format('H'))){
      $("#hour-16").toggleClass("present")
    }
    if (parseInt($("#hour-16").attr('data-index')) > parseInt(dayjs().format('H'))){
      $("#hour-16").toggleClass("future")
    }
    if (parseInt($("#hour-16").attr('data-index')) < parseInt(dayjs().format('H'))){
      $("#hour-16").toggleClass("past")
    }
    if (parseInt($("#hour-17").attr('data-index')) === parseInt(dayjs().format('H'))){
      $("#hour-17").toggleClass("present")
    }
    if (parseInt($("#hour-17").attr('data-index')) > parseInt(dayjs().format('H'))){
      $("#hour-17").toggleClass("future")
    }
    if (parseInt($("#hour-17").attr('data-index')) < parseInt(dayjs().format('H'))){
      $("#hour-17").toggleClass("past")
    }
    }
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  function renderText(){
  var storedText = localStorage.getItem('textContent')
  JSON.parse(storedText)
  }
  // TODO: Add code to display the current date in the header of the page.
  
  function setDateAndTime() {
    var currentDayEl = $('#currentDay')
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a')
    currentDayEl.text(rightNow)
    console.log(rightNow)
  }
  setDateAndTime()
  findCurrent()
  console.log(dayjs().format('H'))
  hours.on("click", ".saveBtn", saveText)
  renderText()
});
