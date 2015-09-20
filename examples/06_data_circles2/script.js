
window.onload = function() {

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
                              cy: 100
                            });

  // This is a function which changes the data of the circles
  
  var changeData = function() {
    
    // This piece of code creates random arrays
    // The length and values of data are randomly changed between 1–5 
    var randomDataForCircles = [];
    for(var c = 0; c < Math.floor(Math.random() * 5) + 1; c++){ randomDataForCircles.push(Math.floor(Math.random() * 5) + 1); }

    // Make a data join with the new data and update our circlesSelection variable to be the new selection
    circlesSelection = circlesSelection.data(randomDataForCircles);

    // We can use the exit method to get a selection of old circle elements which are not needed anymore
    // By default the matching of the data is based on index
    // (For example, if the new data is only 4 items, the fifth circle element on the page doesn't have data)
    circlesSelection.exit().remove();

    // We use the enter method to get a selection of new elements
    // (For example, if the previous data had one circle, and there will be more data, we want to create new circles)
    circlesSelection.enter().append('circle');

    // We can use the normal selection to update every element to reflect the new data
    circlesSelection.attr({
                  r: function(d, i) { return d * 10; },
                  cx: function(d, i) { return 50 + i * 100; },
                  cy: 100
                });
  };
  

  // When user clicks the window, run our function
  window.onclick = changeData;

};
