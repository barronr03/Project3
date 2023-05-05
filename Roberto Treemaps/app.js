d3.csv('../database/nonvoters_data_clean.csv').then(function(rows){

  console.log(rows);

  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]});
  }
  
  var data = [{
    type: "treemap",
    ids: unpack(rows, 'ids'),
    labels: unpack(rows, 'labels'),
    parents: unpack(rows, 'parents')
  }];
  
  Plotly.newPlot('treemap', data);
})
