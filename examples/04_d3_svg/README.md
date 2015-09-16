# Selecting and appending SVG elements

In this example we use D3 to create new elements.

We create a D3 selection from the `<body>` element, which allows us to apply special D3 operators to that element. One of those operators is `append`, which can be used to create new elements inside selections. What we get back from `append` is a new selection containing the appended elements, in this case, the SVG container.

```
var svg = d3.select('body').append('svg');
```

Note that instead of chaining the selection of body and append, we could have written the selection and and append separately:

```
var body = d3.select('body');
var svg = body.append('svg');
```

This code does the same thing, and as a result we have an `<svg>` element inside `<body>` element. Now we can append a circle inside the SVG container and store that selection as a variable:

```
var circle = svg.append('circle');
```

Finally we use a D3 operator `attr` to set attributes on our circle: x- and y-coordinates, and radius:

```
circle.attr({
  cx: 50,
  cy: 50,
  r: 10
});
```

We also set width and height for our SVG container (without setting any dimensions the default 300 x 150).