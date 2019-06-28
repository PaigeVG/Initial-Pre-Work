//# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

In general terms, when we hit https://www.techtonic.com/ the browser looks up the IP address for the website and sends a request to the address, which is then routed across a network of computers between our computer and Techtonic, and finally reaches the Techtonic application server which replies to the request with data. The browser takes that data and renders a document. 

## From start to finish, how does data reach you to be rendered in the browser?

First, we reach out to a DNS to find out what IP address corresponds to the domain www.techtonic.com. Assuming the DNS responds, we now have an IP address in hand that we can use to send a GET request using the HTTPS protocol. When techtonic's webserver receives our GET, any number of things could happen depending on how the server-side code is set up to process it. Generally speaking, however, it will send us back a status code of 200 (success, OK) along with the HTML, CSS, JavaScript, and other assets needed to render the page. 

## What code is rendered in the browser?

The browser does not render the actual source code directly in the window, but rather interprets HTML and CSS to render the final document seen by the user. JavaScript executing inside the browser's engine may further modify the document by making changes to the DOM or other aspects of the page.

## What is the server-side code’s main function?

The server-side code's main function is to process web requests and render a response.

## What is the client-side code’s main function?

Client-side code's main function is generally to allow a webpage to be dynamic. It allows us to make changes to the DOM and thereby manipulate the document without reloading the page. The client side code also allows you to track events such as user input and respond to them.

## What is runtime?

Runtime refers to the period during which the code is actually executing, hence the term runtime error: an error that occurs while the program is running, as opposed to a compile error which occurs while the program is compiling.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Assuming that we are referring to how many instances of each file are created on the client computer, the answer is one per request. Assets are not automatically persisted between requests, although the browser may cache static assets like images.

## How many instances of the server-side code are available at any given time?

Here is how I interpreted this question: "How many operating system processes are running the application server code and responding to requests?"

In the simplest case, there will be only one instance. However, if your website receives a lot of traffic, you may need to create a more complicated system with multiple instances and some strategy for them to balance load and work with common resources. Techtonic itself uses AWS, which can allow for a dynamic number of instances based on moment-to-moment traffic.

## How many instances of the databases connected to the server application are created?

In the simplest scenario, the server will use just one database instance. High-traffic systems may require multiple instances. I can't speak to the details, but this isn't as simple as copy pasting to another machine.