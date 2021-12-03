const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
  let arr = data.toString().split("\n");
  process(arr);
});

function process(_data) {
  const total = _data.filter(isBigger).length;
  console.log(total);
}

function isBigger(_cur, _idx, _arr) {
  return parseInt(_cur) > parseInt(_arr[_idx-1])
}