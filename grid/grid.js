
function makeRows(rows, cols, container, item) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement('div');
    cell.innerText = c + 1;
    container.appendChild(cell).className =  item + (c+1);
  }
}
export { makeRows };
