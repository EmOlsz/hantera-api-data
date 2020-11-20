// This file is where the magic happens! Step 1-6 contains an
// explanation of the starter code. If you wan't to skip ahead
// to the excersise - go to step 7. And as always, feel free to
// change the styling and add more fields to the cards if you
// find something interesting in the data.

// 1. Here we declare the URL to the API.
const URL = "https://api.spacexdata.com/v4/launches"

// 5. This is our main function. It picks up the json we
//    passed along when we invoked the function. So "launches"
//    contains the whole response from the API since it's
//    the same as "json".
const displayLaunches = launches => {
// 6. We use the launches array and for each item (or launch)
//    in the array, we add a new div with info inside:
  launches.forEach(launch => {
            
// 7. We get the element from the HTML and change its inner HTML.
//    We've already added the name of the launch, but your task is
//    to look through the JSON and see if you can find more things
//    to display about each launch, e.g. an image of the patch used,
//    launch details and a link to read more about the launch.
//    Hint! Look in the console where we logged the json to see how
//    it's structured. Think of it as a regular JavaScript array
//    with objects in it
const details = launch.details
    document.querySelector(".all-launches").innerHTML += 
      `<div class="launch">
        <h2>${launch.name}</h2>
        <p>${launch.date_utc.slice(0,10)}</p>
        <img src="" />
        <p class="details">Launch details</p>
        <a href="">Read more</a>
      </div>
      `
  })
} 

// 2. First thing that happens in this file is the fetch().
//    Fetch is a built in JavaScript function that sends a
//    request to the URL we pass as an argument. We turn the
//    response to JSON format (JavaScript Object Notation)
//    before we finally decide what to do with the data.
fetch(URL)
  .then((response) => {
    return response.json()
  })
  .then((json) => {
    // 3. Here we log the data to the console, to be able to see
    //    how it's structured.
    console.log(json)

    // 4. Here we call our displayLaunches function and pass along
    //    the json/data as an argument.
    displayLaunches(json)
  })