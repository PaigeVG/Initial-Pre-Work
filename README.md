# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

In non-technical terms, when we hit https://www.techtonic.com/ we look up its address, use that address to ask its server for data, and finally use that data to render a document. 

## From start to finish, how does data reach you to be rendered in the browser?

First, we reach out to a DNS to find out what IP address corresponds to the domain www.techtonic.com. Assuming the DNS responds, we now have an IP address in hand that we can use to send a GET request using the HTTPS protocol. When techtonic's webserver receives our GET, any number of things could happen depending on how the server-side code is set up to process it. Generally speaking, however, it will send us back a status code of 200 (success, OK) along with the HTML, CSS, JavaScript, and other assets needed to render the page. 

## What code is rendered in the browser?

The browser does not render code itself directly, but rather interprets HTML and CSS to render the final document seen by the user. JavaScript executing inside the browser's engine may further modify the document by making changes to the DOM or other aspects of the page.

## What is the server-side code’s main function?

Like any program server-side code can do arbitrary things, but its main function is to properly route, process, and respond to requests from clients.

## What is the client-side code’s main function?

Client-side code generally exists to allow a webpage to be dynamic in some way. It allows us to make changes to the DOM and thereby manipulate the document without making another request. These changes commonly occur due to other functionality provided by such code, like tracking page events, loading external resources, or accepting user input.

## What is runtime?

Runtime refers to the period during which the code is actually executing, hence the term runtime error: an error that occurs while the program is running, as opposed to a compile error which occurs while the program is compiling.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Assuming that we are referring to how many instances of each file are created on the client computer, the answer is one per request. Assets are not automatically persisted between requests.

## How many instances of the server-side code are available at any given time?

Depending on what is meant by an instance and who is hypothetically accessing it, the answer varies. I'll address a couple of cases I can think of.

*Instance meaning copy of the source code and accessor being the client:
The answer is (hopefully) zero. Unless something is seriously wrong with your code, the browser will never make the full source available to the client. HTML, CSS, and JS obviously must be transmitted and there is very little that can be done to obfuscate their contents, but this is not usually a big concern.

*Instance meaning copy of the source code and accessor being the maintainer:
A server may consist of more than one machine, and each machine may need its own copy. So, the answer is anywhere from one to the number of machines.

*Instance meaning running server process and accessor being the user:
Very much depends on what kind of web server is being run. According to the StackOverflow post found here -> (https://stackoverflow.com/questions/1969545/some-fundamental-but-important-questions-about-web-development), a single request could be handled either by its own dedicated process, its own thread, or neither. From the user's point of view you could say a process-per-request server provides one "instance" per request, although of course only the end results of the process's work is available to the user, not the process itself. 

*Instance meaning running server process and accessor being the maintainer:
Again, as above, it varies. If we imagine a situation where each request gets its own process and the maintainer is able to monitor all such processes, then the "instances available" is the number of current requests.


## How many instances of the databases connected to the server application are created?

While web architecture can get pretty complicated, typically, the server will create and use just one database connection.
