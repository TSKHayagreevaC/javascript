# An Introduction to JavaScript

> - ### JavaScript was initially created to **“make web pages alive”**.

> - ### The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.

> - ### Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.

> - ### In this aspect, JavaScript is very different from another language called Java.

> - ### JavaScript initially had another name: **“LiveScript”**. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.

> - ### But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all.

> - ### JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the **JavaScript Engine**.

> - ### The browser has an embedded engine sometimes called a **“JavaScript virtual machine”**.

> - ### Different engines have different “codenames”. For example:
> - -  ### <u>**V8**</u> – in Chrome, Opera and Edge.
> - - ### <u>**SpiderMonkey**</u> – in Firefox.
> - - ### <u>**Chakra**</u> for IE, 
> - - ### <u>**JavaScriptCore**</u>
> - - ### <u>**Nitro**</u>
> - - ### <u>**SquirrelFish**</u> for Safari, etc.

> ### **Note:**  If **a feature X is supported by V8**, then it probably works in Chrome, Opera and Edge.

> ### **Working of Engine**: Engines are complicated. But the basics are easy.
> ### **Step 1:** ### The engine (embedded if it’s a browser) reads (“parses”) the script.
> ### **Step 2:** It converts (“compiles”) the script to machine code.
> ### **Step 3:** Machine code runs, pretty fast.
<br />

> ### **Note:** The engine applies optimizations at each step of the process. It even watches the compiled script as it runs, analyzes the data that flows through it, and further optimizes the machine code based on that knowledge.

> ## **client-side (or) in-browser JavaScript:**
> - ### Modern JavaScript is a “safe” programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it.
> - ### JavaScript’s capabilities greatly depend on the environment it’s running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.
> - ### In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the webserver.
> - ### **In-browser JavaScript is able to:**
>   -  ### Add new HTML to the page, change the existing content, modify styles.
>   - ### React to user actions, run on mouse clicks, pointer movements, key presses.
>   - ### Send requests over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).
>   - ### Get and set cookies, ask questions to the visitor, show messages.
>   - ### Remember the data on the client-side (“local storage”).
>  - ### **In-browser JavaScript is NOT able to:**
>    - ### JavaScript’s abilities in the browser are limited to protect the user’s safety. The aim is to prevent an evil webpage from accessing private information or harming the user’s data.
>    - ### JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs. It has no direct access to OS functions.
>    - ### Modern browsers allow it to work with files, but the access is limited and only provided if the user does certain actions, like “dropping” a file into a browser window or selecting it via an **Input** tag.
>    - ### There are ways to interact with the camera/microphone and other devices, but they require a user’s explicit permission. So a JavaScript-enabled page may not sneakily enable a web-camera, observe the surroundings and send the information to the NSA(Networked Status Aggregator).
>       **Note:** <br />
> *NSA stands for **Networked Status Aggregator**, a tool that collects and analyzes data from a variety of sources, including network traffic, system logs, and application events. This data can then be used to identify potential security threats and to monitor the overall health of a network or system.
>    - ### Different tabs/windows generally do not know about each other. Sometimes they do, for example when one window uses JavaScript to open the other one. But even in this case, JavaScript from one page may not access the other page if they come from different sites (from a different domain, protocol or port).
>    - ### This is called the “Same Origin Policy”. To work around that, both pages must agree for data exchange and must contain special JavaScript code that handles it. We’ll cover that in the tutorial.
>     - ### This limitation is, again, for the user’s safety. A page from http://anysite.com which a user has opened must not be able to access another browser tab with the URL http://gmail.com, for example, and steal information from there.
>     - ### JavaScript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is crippled. Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side. Once again, that’s a safety limitation.
>     - ### Such limitations do not exist if JavaScript is used outside of the browser, for example on a server. Modern browsers also allow plugins/extensions which may ask for extended permissions.

> - ## There are at least three great unique things about JavaScript:
>   1. Full integration with HTML/CSS.
>   2. Simple things are done simply.
>   3. Supported by all major browsers and enabled by default.

> - ### Note: JavaScript can be used to create servers, mobile applications, etc.

Languages “over” JavaScript
The syntax of JavaScript does not suit everyone’s needs. Different people want different features.

That’s to be expected, because projects and requirements are different for everyone.

So, recently a plethora of new languages appeared, which are transpiled (converted) to JavaScript before they run in the browser.

Modern tools make the transpilation very fast and transparent, actually allowing developers to code in another language and auto-converting it “under the hood”.

Examples of such languages:

CoffeeScript is “syntactic sugar” for JavaScript. It introduces shorter syntax, allowing us to write clearer and more precise code. Usually, Ruby devs like it.
TypeScript is concentrated on adding “strict data typing” to simplify the development and support of complex systems. It is developed by Microsoft.
Flow also adds data typing, but in a different way. Developed by Facebook.
Dart is a standalone language that has its own engine that runs in non-browser environments (like mobile apps), but also can be transpiled to JavaScript. Developed by Google.
Brython is a Python transpiler to JavaScript that enables the writing of applications in pure Python without JavaScript.
Kotlin is a modern, concise and safe programming language that can target the browser or Node.
There are more. Of course, even if we use one of these transpiled languages, we should also know JavaScript to really understand what we’re doing.

Summary
JavaScript was initially created as a browser-only language, but it is now used in many other environments as well.
Today, JavaScript has a unique position as the most widely-adopted browser language, fully integrated with HTML/CSS.
There are many languages that get “transpiled” to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript.