
// Hamburger Menu drop down function //
// My constants toggleButton and navbarLinks grabs the two classes inside all html pages in the NAV toggleButton gets the button with 3 lines//
// and navbarLinks gets the nav-links class that its a DIV with an UL inside with html links to every other page//
// the my toggleButton has an Event Listener that when its clicked it will get the navbarLinks to add the :active class that its written on my css page to display it//
// using the classList DOM element having it to toggle and use it between hide it or show my links on the nav//
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
//My submitAlert function gets the button in "index.html" and adds and Event Listener when clicked it will display my function of alert below//

let submitAlert = document.getElementById('home-submit-button').addEventListener('click', function() {
    alert('Thanks for buying with us!.')
})


