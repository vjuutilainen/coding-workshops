window.onload = function() {
  
  var svg = d3.select('body')
              .append('svg')
              .attr({
                width: 800,
                height: 600
              });

  var rect = svg.append('rect')
                .attr({
                  width: 100,
                  height: 100,
                  fill: 'red',
                  x: 50,
                  y: 50
                });

  window.onclick = function() {

    rect.attr('fill', 'blue');
  
  };

};
