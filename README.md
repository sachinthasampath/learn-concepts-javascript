# Inline Script
Inline script is when you add JavaScript code between <script></script> tag. This is how I started JavaScript. I believe most of JavaScript developer have done this at least once in their life time.

This is very good way to get started. There is no external files or dependency to worry about. But this is also perfect recipe for unmaintainable code because of following:

- Lack of Code Reusability: If we need to add another page and need some of the functions from this page, we will have to copy and paste the code
- Lack of Dependency Resolution: You are responsible for having add, reduce and sum functions come before main part of the script.
- Pollution of global namespace: All the functions and variables will reside on global scope.



# Script tags
This is natural transition from inline scripting. Now we divide the big chunk of JavaScript into smaller pieces and load them using <script src=”…”></script> tags.

By separating files into multiple JavaScript files, we can reuse the code. We no longer need to copy and paste code between different html pages. We simply need to include the file with script tags. Although this is better approach, this still has following problems.

- Lack of Dependency Resolution: The order of the files are important. You are responsible for including add.js, reduce.js and sum.js files before main.js file.
- Pollution of global namespace: All the functions and variables are still in global scope.

# Module Object and IIFE(Module Pattern)

Module Object and IIFE(Module Pattern)
By using module object and Immediately-invoked function expression(IIFE), we can reduce global scope pollution. In this approach, we expose only one object to global scope. The single object contains all the methods and values we need in our application. In this example, we expose only myApp object to global scope. All the functions will be held onto myApp object.

This is huge improvement compared to previous example. And most of popular JavaScript libraries such as jQuery use this pattern. It exposes one global object, $, and all the functions are under $ object.

Yet, this is not a perfect solution. This approach still suffers from the same problem as previous section.

- Lack of Dependency Resolution: The order of the files are still important. myApp.js file must come before any other files. And main.js file must come after all other library files.
- Pollution of global namespace: Number of global variable is now 1, but is not zero yet

# CommonJS
In 2009, there were discussions about bringing JavaScript to server side. Thus ServerJS was born. ServerJS later changed its name to CommonJS.

__CommonJS is not a JavaScript library. It is a standardization organization. It is like ECMA or W3C.__ 
- __ECMA defines the language specification for JavaScript.__
- __W3C defines JavaScript web API, such as DOM or DOM events.__
- __The goal of CommonJS is to define common APIs for web server, desktop and command line applications.__

CommonJS also defines APIs for module. Since there is no HTML page and no _script_ tag on server application, it make sense to have some clear APIs for modules. Modules need to be exposed(export) to others for use and be accessible(import). 


```code
// add.js
module.exports = function add(a, b){
  return a+b;
}

// another file
var add = require(‘./add’);
```
If you have written code on NodeJS, this syntax may look familiar. That’s because NodeJS implemented CommonJS style module API.





## A History of JavaScript Modules and Bundling, For the Post-ES6 Developer
[https://8thlight.com/insights/a-history-of-javascript-modules-and-bundling-for-the-post-es6-developer](https://8thlight.com/insights/a-history-of-javascript-modules-and-bundling-for-the-post-es6-developer)


## Brief history of JavaScript Modules

[https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde](https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde)