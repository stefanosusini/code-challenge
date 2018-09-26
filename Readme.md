# Tiny code challenge
### What is it:
This challenge is designed to be a very simple - and FAST - coding test to asses the skills of a senior front-end developer on React, Redux and Redux-saga (and some other relevant technologies).
### What shall you do:
The presented app is a relatively simple web application that has only one page. In the page, there is a search form at the top and an "empty list of shows" below it.
Redux and its middleware redux-saga are already wired up for you.
The overall aim of the test is to put this app in better shape: 
- write/fix some of the unit tests, 
- write the code to fulfil other tests, 
- make the form component functional and use it to collect the user input,
- and run the backend call to fetch the data.

The basic tasks below should take less than an hour to complete. Generally, I expect you to be able to pick up all the information needed to complete the test from the code itself.
The optional tasks really are optional; don't bother if you don't have time.
#### Basic tasks:
- Complete the SearchForm component (including the test)
- Write the code to fulfil the tests:
-- `/store/state/show/api.spec.js`
-- `/store/state/show/reducer.spec.js`
- Write the saga in `/store/state/show/sagas.spec.js`
- Setup the page to handle the user input and fire the BE call
- Display a list of show names according to the user query
#### Optional tasks:
- Display more information about the show in the list (design a list item).
- Add a `loading` mechanism and show the loading state in the page
- Expand the app adding another functionality (e.g. call another endpoint in the BE)