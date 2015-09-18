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
  var circles = svg.selectAll('circle').data(circleData);          
  
  // We now have a special enter selection for all the elements that don't exist yet.
  // We use it to create circles with each data as radius
  circles.enter()
      .append('circle')
      .attr('r', function(d, i) {
        return d;
      });

  // Now the circles are part of our selection and can be updated without entering.
  //This time we set x coordinates and y coordinates based on selection's index and add some padding
  circles
    .attr('cx', function(d, i) { return 50 + (i * 100); })
    .attr('cy', 100);

  // Here we add some interactivity
  window.onclick = function() {

    console.log('clicked');
    
    // When user clicks the page the data changes
    circleData = circleData.reverse();

    // We join the new data and update our variable
    circles = circles.data(circleData);

    // We set the radius based on new data
    circles.attr('r', function(d, i) {
      return d;
    });

  };

};
