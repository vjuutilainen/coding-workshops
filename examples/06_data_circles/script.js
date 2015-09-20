
// This example contains two parts of code:
// The first part goes forward step by step and contains commented out console.log calls to see how D3 selections work. 
// The second part has the same code as a concise, chained version

// This is the regular wrapper for our code: set a function to be called when the document is ready
window.onload = function() {

  // FIRST PART STARTS

  // Defining the data we will be using
  var dataForCircles = [1, 2, 3, 4, 5];

  // Create a special D3 selection from the body element
  // This selection contains D3-specific methods
  var bodySelection = d3.select('body');

  // Our "bodySelection" is a one-length array of one-length array containing the body element

  // Selection is an array:
  // console.log(bodySelection);
  
  // The first item of that array is an array, using a D3-specific term, we call it a "group"
  // console.log(bodySelection[0]);
  
  // That group also has a parentNode property, which stores the parent element of the group
  // In this case it's the top level element "html"
  // console.log(bodySelection[0].parentNode);
  
  // The actual element, body, is the first item of the group
  // console.log(bodySelection[0][0]);

  // Create SVG element inside body element using the D3-specific "append" method of our previous selection 
  var svgSelection = bodySelection.append('svg');

  // We can set attributes for this element using D3-specific "attr" method
  
  // We can set multiple attributes at once with an object
  svgSelection.attr({
    width: 500,
    height: 200
  });

  // The selection is again one-length array of one-length array, now containing the SVG element
  // console.log(svgSelection);

  // Note: The grouping is preserved and parentNode property of the group is still the same "html" as it was with the body selection before
  // console.log(svgSelection[0].parentNode);

  // Select propagates data from parent to child, so if body had data, you could access that data through the SVG selection
  
  // Create a selection from all the circle elements inside the SVG element
  var circlesSelection = svgSelection.selectAll('circle');

  // Making a selection from all the circles inside the SVG returns again one-length array
  // The group array inside it contains only the parentNode property, as there is no circle elements inside our newly created SVG 
  // console.log(circlesSelection);

  // Using selectAll method of the SVG selection means that it becomes the parentNode
  // console.log(circles[0].parentNode);

  // Call the D3-specific data method with our data array as argument
  var dataJoinedCirclesSelection = circlesSelection.data(dataForCircles);

  // Our dataForCircles array has now been joined with the circles selection
  // As a result of the data join we know which items of our dataForCircles have a matching circle element inside the SVG element

  // What we get back from the join is once again a selection
  // It's a selection of circle elements that are already on the page and have matching data
  // At this point we don't have any, so there is no elements inside the group, but its length is the same than our data's

  // The selection has now two D3-specific methods, "enter" and "exit"
  // "Exit" returns a selection of circle elements that are already on the page don't have matching data
  // We don't have any of these elements either
  // console.log(dataJoinedCirclesSelection.exit());

  // "Enter" returns a selection of elements for which we have data but no matching element
  // console.log(dataJoinedCirclesSelection.enter());

  // This "enter" selection allows us to create new elements based on data
  // The group array contains placeholder objects with our data
  // console.log(dataJoinedCirclesSelection.enter()[0]);

  // Append circles using the append method of the selection returned by "enter" method
  dataJoinedCirclesSelection.enter().append('circle');

  // We have now created the circles
  // console.log(dataJoinedCirclesSelection);

  // Now we can use "attr" method of the selection to set attributes for every circle element in the group
  // Here we set the "cy" attribute as a static value independently
  dataJoinedCirclesSelection.attr('cy', 100);

  // If we set the value of the attribute to be returned by a function, that function is evaluated for each element
  // Inside that function we are given access to each item of our data, current element's index and the element itself 
  
  // Here we set the radius to be set according to our data 
  dataJoinedCirclesSelection.attr('r', function(d, i) { return d * 10; });

  // Here we set the cx coordinate according to element's index (parameter "i")
  // Note that we need to still include the "d" as first parameter
  dataJoinedCirclesSelection.attr('cx', function(d, i) { return 50 + i * 100; });

  // At this point we have a static representation of the data as 5 black circles on our page

  // FIRST PART ENDS





  // SECOND PART STARTS

  // In D3 the operations we do on selections return the new selections
  // This allows us to chain our code
  // Short version of the same code with a same end result below:

  var dataForCircles2 = [1, 2, 3, 4, 5];

  var circlesSelection2 = d3.select('body')
                            .append('svg')
                            .attr({
                              width: 500,
                              height: 200
                            })
                            .selectAll('circle')
                            .data(dataForCircles2)
                            .enter()
                            .append('circle')
                            .attr({
                              r: function(d, i) { return d * 10; },
                              cx: function(d, i) { return 50 + i * 100; },
                              cy: 100
                            });

  // SECOND PART ENDS




};
