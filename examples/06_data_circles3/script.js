window.onload = function() {

  // This is the data we will be joining
  var circleData = [10, 20, 30, 40, 50]; 

  // Create an empty SVG container inside body and store it under a variable
  var svg = d3.select('body').append('svg');

  // Set the size of the SVG container by setting multiple attributes at once
  svg.attr({
    width: 800,
    height: 640
  });

  // We are making a selection of all circles inside SVG (there isn't any yet) and giving the data for them
  // Normally the data is joined by index, but now we want to use the radius value as the key
  var circles = svg.selectAll('circle')
                    .data(circleData, function(d) { return d; });          
  
  // We now have a special enter selection for all the elements that don't exist yet.
  // We use it to create circles
  circles.enter()
      .append('circle');    

  // Now the circles are part of our selection and can be updated without entering.
  //This time we set x coordinates and y coordinates based on selection's index and add some padding
  circles
    .attr('cx', function(d, i) { return 50 + (i * 100); })
    .attr('cy', 100);

  // Lets finally animate their sizes by making a special transition selection and setting a duration for changes
  // We need to give the starting value for radius
  circles
    .attr('r', 0)
    .transition()
    .duration(1000)
    .attr('r', function(d, i) {
      return d;
    });

  // Here we add some interactivity
  window.onclick = function() {

    console.log('clicked');
    
    // This piece of code creates random arrays
    var arr = [];
    for(var c = 0; c < Math.floor(Math.random() * 5) + 1; c++){ arr.push(Math.random() * 50); }

    // Let's replace the circle data with our random array
    circleData = arr; 

    // We join the new data and update our variable with the radius value as the key
    circles = circles.data(circleData, function(d) { return d; });

    // Let's do this in different order now
    // There will also be elements that don't have data anymore to represent, so we remove those using special exit selection
    // Let's move this away first
    circles.exit()
            .transition()
            .duration(1000)
            .attr('cy', -100)
            .each('end', function(d, i) {
              d3.select(this).remove();
            });

    // There will be new data that don't have corresponding elements, so we use the special enter selection to create those
    circles.enter()
          .append('circle')
          .attr('cx', function(d, i) { return 50 + (i * 100); })
          .attr('cy', 100);

    // Then for all the items we set the radius based on new data, let's animate those like in the beginning
    circles.attr('r', 0)
            .transition()
            .duration(1000)
            .attr('r', function(d, i) {
              return d;
            });
  };

};
