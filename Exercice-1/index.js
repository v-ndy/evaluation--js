var GridGenerator = function GridGenerator(xAxis, yAxis){
  this.xAxis = xAxis;
  this.yAxis = yAxis;
}

GridGenerator.prototype.run = function(){
  this.renderTable();
  setInterval(function(){
      this.randomColor()
      }.bind(this), 2000);
}

GridGenerator.prototype.renderTable = function() {
   var matrix = document.createElement("table");
   for (var i= 0; i < this.xAxis; i++){
        var tr = document.createElement("tr");
        for(var j=0; j < this.yAxis; j++){
          var td = document.createElement("td");
          var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
          tr.appendChild(td);
          td.style.backgroundColor = randomColor;
          td.style.border = "5px solid black";
          td.style.width = "50px";
          td.style.height = "50px";
          }matrix.appendChild(tr);
    }document.querySelector('body').appendChild(matrix);

}


GridGenerator.prototype.randomColor = function() {
    var td_list = document.querySelectorAll('td');
    td_list.forEach(function(td_list){
      var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      td_list.style.backgroundColor = randomColor;
  });
}


var gridGenerator = new GridGenerator(11, 11);

gridGenerator.run();
