
window.onload = function() {

  // Color scheme from colorbrewer2.org
  var colors = ['rgb(102,194,165)', 'rgb(252,141,98)', 'rgb(141,160,203)', 'rgb(231,138,195)', 'rgb(166,216,84)'];

  var dataForCircles = [1, 2, 3, 4, 5];

  var circlesSelection = d3.select('body')
                            .append('svg')
                            .attr({
                              width: 500,
                              height: 200
                            })
                            .selectAll('circle')
                            .data(dataForCircles)
                            .enter()
                            .append('circle')
                            .attr({
                              r: function(d, i) { return d * 10; },
                              cx: function(d, i) { return 50 + i * 100; },
                              fill: function(d, i) { return colors[d - 1]; }, // get color for a certain value, reduce value by one to get color index
                              cy: 100
                            });

  // This is a function which changes the data of the circles
  
  var changeData = function() {

    // This piece of code creates random arrays
    // The length and values of data are randomly changed between 1–5 
    var randomDataForCircles = [];
    for(var c = 0; c < Math.floor(Math.random() * 5) + 1; c++){ randomDataForCircles.push(Math.floor(Math.random() * 5) + 1); }

    circlesSelection = circlesSelection.data(randomDataForCircles);

    // We want the removed circles to be moved out of the way
    // We place the D3 transition method with a duration before setting the cy attribute
    // The each method allows us to remove the element when the animation has ended
    circlesSelection.exit()
                    .transition()
                    .duration(500)
                    .attr('cy', -100)
                    .each('end', function() {
                      d3.select(this).remove();
                    });

    // We want the old elements to just resize after the removing of the old elements is done, we do this now by setting a delay
    // Note we do this before adding any new elements
    circlesSelection.transition()
                .delay(500)
                .duration(500)
                .attr('r', function(d, i) { return d * 10; });

    // Finally we animate the new elements to grow from zero radius
    // Note we first set the values that are not animated
    circlesSelection.enter()
                    .append('circle')
                    .attr({
                      cx: function(d, i) { return 50 + i * 100; },
                      fill: function(d, i) { return colors[d - 1]; },
                      cy: 100,
                      r: 0
                    })
                    .transition() 
                    .delay(1000)
                    .duration(500)
                    .attr('r', function(d, i) { return d * 10; });

  };
  
  // Run our function every 1000 milliseconds
  window.setInterval(changeData, 1000);

};
