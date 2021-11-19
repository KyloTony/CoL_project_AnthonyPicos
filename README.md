# Jewelry-Store-website
Hello my name is Anthony Picos Perez and this is my first website, for the Code of Louisville project.

-------What my project is about?
    
    

     My project is simulating a Jewelry store website where "costumers" can see and buy the products in the main page using the three columns, each with a product image on top and the all products inside a scroll column below with checkboxes to select each desired item. 
    
    ------Desktop:

    ~ On the very bottom left (Home Page) there is a div where the "costumer" can click the button and make an "order", it has JAVASCRIPT function with a click event listener(when clicked it run an alert with a message).

    ~ On the bottom right (Home Page) there is the footer slightly hidden to don't bother, and has a CSS :hover feature linked with two different CSS selectors to be originally slightly hidden and when hoover mouse on top it will activate the other CSS to have a lot more oppacity.

    ~ (Contact US Page) has three divs with description on how to understand and use Contact Us page, a form where "costumer" can fill up 'FAKE' personal info to Contact the Jewelry Store, and underneath two more forms for custom orders. Same thing for footer here.

    ~ Last is (About Us Page) where it has one main div that contains three more inside nested, diplaying in order a map with an iFrame from Google maps 'Please this is a random location of an empty street its a 'FAKE location in California ONLY DEMOSTRATION PURPOSES', then is div with about description using <p> element and a schedule at last with 'FAKE PHONE NUMBER' same thing for the footer.

    --------Mobile:
    
    ~ In mobile (All pages for mobile) there is a NAV bar on the very top inside <header> tag with the logo on left and the dropdown menu on the right, drop down menu has a JAVASCRIPT funtion with constants that has events listener selected with class name to slect all the <a> links that display when the button is clicked, hiding it doing same process and the constant will make it go back to its default state (hidden).
    
    ~ (Home Page) there is the three column displayed like one column that shows all the products, Bracelets first, Necklace second, Rings last divided by three different divs with all items for each category selective with checkboxes. Everything scrolling down making it easier to for mobile including easy for one hand use.

    ~ (Contact Us page) keeps same nav using same golbal function this one displays the same with three divs, in one column, description, form underneath for personal info with the two buttons Submit and Reset All to reset unwanted info in the form. Lastly the div with the customizable chains with images and their respective text input.

    ~ (About Us page) having same layout for mobile, displaying one column with map iframe description and schedule with 'Fake phone no.'


    ---------JavaSript features?

    ~ Located on the nav bar for all media queries mobile and desktop, the drop down menu. 
    (  My constants toggleButton and navbarLinks grabs the two classes inside all html pages in the NAV toggleButton gets the button with 3 lines and navbarLinks gets the nav-links class that its a DIV with an UL inside with html links to every other page the my toggleButton has an Event Listener that when its clicked it will get the navbarLinks to add the :active class that its written on my css page to display it using the classList DOM element having it to toggle and use it between hide it or show my links on the nav )

    ~ Located on (Home Page) for Mobile layout is on the very bottom of the page on top of the Footer, the Send button has a JavaScript funtion ( My submitAlert function gets the button in "index.html" and adds and Event Listener when clicked it will display my function of alert below )


    ------------CSS features?

    ~ (Mobile query) has its default nav bar hidden using display:none and linking it with my JavaScript function to change the CSS to be the active styling making it to display.

    ~ (Mobile query) there is a CSS feature that selects li:nth-child(4) fourth child nested inside the drop-down-item that is located on (Home Page) the div that can be scrolled with the products. Giving it an additional margin so the items are not out or too close on the bottom.
    
    ~ (All queries) icons in footer change color to white when clicked using the pseudo class for css :visited.

    ~ (Desktop/Bigger screen query) Footer has CSS selector that has its deffault to have opacity 0.5 and another CSS selector with pseudo class with :hover that gives it more opacity of 1 keeping same color. Plus a transition in its default for the opacity with 150ms ease-in-out to be a little more fluid with this small animation.

    ~ <!> (Not a feature) I added some CSS resets on the very top of the CSS syles page, removing all types of defaults for every web browser. Recomendation from YouTube tutorial and StackOverflow.


    ----------How many media queries?

    ~ There is two media queries for small/mobile 675px wide devices and another one that is for bigger/desktop from 675px to 2560px wide screens.

    ----------Whats the size of the images used on my website?

    ~ I managed using Gimp software to compress images and keep the .png file type transparency to be 1.77MB.

    ----------test.txt file

    ~This txt onli ignore it, it has older and backups html and css code for any case somethig didn't work.


    
    (Please, I'm sorry if there is any grammar error my main language its not english.)
    Anthony Picos Perez.




    

 