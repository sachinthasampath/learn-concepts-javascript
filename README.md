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

**CommonJS is not a JavaScript library. It is a standardization organization. It is like ECMA or W3C.**

- **ECMA defines the language specification for JavaScript.**
- **W3C defines JavaScript web API, such as DOM or DOM events.**
- **The goal of CommonJS is to define common APIs for web server, desktop and command line applications.**

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

# Asynchronous Module Definition(AMD)

The problem with CommonJs style module definition is that it is synchronous. When you call ‘var add=require(‘add’);’, the system will be on halt until the module is ready. This mean this line of code will freeze the browser while all the modules are being loaded. So this may not be the best way to define modules for browser side application.

To transfer module syntax from server usage to browser usage, CommonJS proposed several module formats, “Module/Transfer”. One of the proposals, “Module/Transfer/C” later become Asynchronous Module Definition (AMD).

```js
define([‘add’, ‘reduce’], function(add, reduce){
  return function(){...};
});
```

- The define function(or keyword) takes list of dependencies and a callback function as arguments. The arguments for the callback function will be the same order of dependencies in the array. This is equivalent to importing modules. And the callback function returns a value, which is the value you export.

### RequireJS

- AMD can save us from the hell of script tags and global pollution in our browser application. Then, how can I use it? RequireJS is here to help us. RequireJS is a JavaScript module loader. It helps load modules asynchronously as needed.

- Despite its name, its goal is not to support CommonJS ‘require’ syntax. With RequireJS, you can write AMD style module.

- Before you write your own application, you will have to download ‘require.js’ file from RequireJS website.

RequireJS and AMD solve all the problems we had before. However, it creates other slightly less serious problems.

- AMD syntax is too verbose. Since everything is wrapped in ‘define’ function, there are extra indentation for our code. With a small files, it is not much problem, but for a large code base, it can be mentally taxing.
- List of dependencies in the array must match the list of arguments in the function. If there are many dependencies, it can be hard to maintain the order of the dependencies. If you have dozens of dependencies in your module, and later if you had to remove one in the middle, it can be difficult to find matching module and argument.
- With current browsers(HTTP 1.1), loading many small files can degrade the performance.



# Browserify
Because of these reasons, some people want to use CommonJS syntax, instead. But CommonJS syntax is for server and synchronous, right? Browserify is here to rescue you! With Browserify, you can use CommonJS module in browser application. Browserify is a module bundler. Browserify traverse the dependency tree of your codes and bundle them up in a single file.

```sh
npm install -g browserify

browserify main.js -o bundle.js
```


## A History of JavaScript Modules and Bundling, For the Post-ES6 Developer

[https://8thlight.com/insights/a-history-of-javascript-modules-and-bundling-for-the-post-es6-developer](https://8thlight.com/insights/a-history-of-javascript-modules-and-bundling-for-the-post-es6-developer)

## Brief history of JavaScript Modules

[https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde](https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde)
