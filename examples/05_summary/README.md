# Summary 1-4

- SVG is a markup language defining graphics like the rectangle in this example.
- By adding script elements we can run code in our browser and add libraries. In this example we reference our own `script.js` and the D3 library `d3.min.js` files.
- The DOM is a programming interface, which allows us to manipulate elements on the page and react to events. In addition to running code when the page has loaded, in this example we also run a function when user clicks the browser window.
- We can use D3's `select` method to select elements on the page and `append` to create new elements. Operating on these selections we can set styles with `style` and attributes with `attr`. In this example we select the body element in order to append new elements, and set coordinates, width, height and fill color as attributes.