window.onload = function() {
  
  var svg = d3.select('body').append('svg');

  var circle = svg.append('circle');

  circle.attr({
    cx: 50,
    cy: 50,
    r: 10
  });

  svg.attr({
    width: 800,
    height: 600
  });

};
