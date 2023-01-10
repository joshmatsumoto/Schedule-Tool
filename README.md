# Schedule-Tool
## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |
| javaScript | [https://www.javascript.com/](https://www.javascript.com/)     |  
| jQuery | [https://jquery.com/](https://jquery.com/)     |
## Description 
This application was an attempt to create a schedule tool that saves to do list items for the work hours of the day (9-5).
At the top of the page, the current date as well as the current time are displayed.
As the hours pass, the timeblocks dynamically and innefeciently change color to denote whether or not that time block is in the past, future or present.
To do list items in a functional version of the application should be stored into local storage upon the press of the save button and then rendered onto the page if a refresh or reset were to occur.


[Visit the Deployed Site]( https://jeromechenette.github.io/hw-deploy/)


## How to inneficiently solve a problem

This code snippet displays how I initially chose to render the different colors into the time blocks of the page


```js
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
      $("#hour-11").toggleClass("future")...
```

This vaguely readable function leverages dayjs to display the current date and time 

```js
  function setDateAndTime() {
    var currentDayEl = $('#currentDay')
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a')
    currentDayEl.text(rightNow)
    console.log(rightNow)

```



## Usage 

As you go throughout this webpage please remark my efforts and how they failed to come to fruition

