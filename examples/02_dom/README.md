# Manipulating the contents of a web page

This example demonstrates how to manipulate the contents of a web page using JavaScript. The script file located in the local folder is referenced with a script element `<script type="text/javascript" src="script.js"></script>`.

The JavaScript program, running in the browser, is making use of the Document Object Model (DOM). The DOM is part of the web standards supported by our web browser and gives us an interface to work with. In this example the DOM provides us the `window.onload` event handler, which calls whatever function it has been given as soon as the document has been loaded.

```
window.onload = function() {

  var elem = document.getElementsByTagName('body')[0];

  elem.style.background = 'cyan';

};

```

The DOM also provides us the `document.getElementsByTagName` method, which is this case gives us a collection of elements with the tag `body`. We store the first (and only) element as a variable named `elem` and set its style attribute. 

We can access the body element by other methods as well, like `document.querySelectorAll`. There are also many external JavaScript libraries which make it easier to work with the DOM.

# Reference
 
- [Web API Interfaces – Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)
- [Web API Interfaces – Document](https://developer.mozilla.org/en-US/docs/Web/API/document)
- [Web API Interfaces – HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)