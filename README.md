# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

In non-technical terms, when we hit https://www.techtonic.com/ we look up its address, use that address to ask its server for data, and finally use that data to render a document. 

## From start to finish, how does data reach you to be rendered in the browser?

First, we reach out to a DNS to find out what IP address corresponds with the domain www.techtonic.com. Assuming the DNS responds, we now have an IP address in hand that we can use to send a GET request using the HTTPS protocol. When techtonic's webserver receives our GET, any number of things could happen depending on how the server-side code is set up to process it. Generally speaking, however, it will send us back a status code of 200 (success, OK) along with the HTML, CSS, and JavaScript needed to render the page. 

## What code is rendered in the browser?

put your answer here

## What is the server-side code’s main function?

Like any program server-side code can do arbitrary things, but its main function is to properly route, process, and respond to requests from clients.

## What is the client-side code’s main function?

Client-side code generally exists to allow a webpage to be dynamic in some way. It allows us to make changes to the DOM and thereby manipulate the document without making another request. These changes commonly occur due to other functionality provided by such code, like tracking page events, loading external resources, or accepting user input.

## What is runtime?

Runtime refers to the period during which the code is actually executing, hence the term runtime error: an error that occurs while the program is running, as opposed to a compile error which occurs while the program is compiling.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One per request. Assets are not automatically persisted on the client's machine between requests.

## How many instances of the server-side code are available at any given time?

put your answer here

## How many instances of the databases connected to the server application are created?

put your answer here
