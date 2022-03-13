
let colorSelected;

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    console.log("rows.length: ", rows.length);
   
    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    } else {
        let row = document.createElement("tr");
        console.log(rows.length);
        for (let i = 0; i < rows[0].childElementCount; i++) {
          let col = document.createElement("td");
          col.onclick = function (){
            this.style.backgroundColor = colorSelected;
          };
          row.appendChild(col);
        }
        grid.appendChild(row);
    }
}

//Adds a column
function addC() {
    //alert("Clicked Add Col")
    let cols = document.getElementsByTagName("td");
    console.log(cols.length);
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    console.log(rows.length);
   
    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    } else {
        console.log("amount of rows ", rows.length);
        for (let i of rows) {
          console.log(i);
          let col = document.createElement("td");
          col.onclick = function (){
            this.style.backgroundColor = colorSelected;
          };
          i.appendChild(col);
        }
    }

}

//Removes a row
function removeR() {
    //alert("Clicked Remove Row")
    let grid = document.getElementById("grid");
    let last_row = grid.lastElementChild;
    grid.removeChild(last_row);
    let rows = document.getElementsByTagName("tr");
    console.log(rows.length);
    console.log(last_row);
    if (rows.length === 0) {
      let cols = document.getElementsByTagName("td");
      let cols_count = cols.length;
      for (let i = 0; i < cols_count; i++) {
        cols.removeChild(cols.lastChild);
      }
      console.log("cols length after for: ", cols.length);
    }
}

//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
    let rows = document.getElementsByTagName("tr");
    let cols = document.getElementsByTagName("td");
    console.log(document.querySelectorAll("tr td"));
    for (let row of rows) {
      let last_col = row.lastElementChild;
      row.removeChild(last_col);
    }
    console.log("length is cols: ", cols.length)
    if (cols.length === 0) {
        console.log("length of rows: ", rows.length);
        let rows_count = rows.length;
        for (let i = 0; i < rows_count; i++) {
          console.log("length of rows inside forA: ", rows.length);
          let grid = document.getElementById("grid"); 
          grid.removeChild(grid.lastElementChild);
          console.log("length of rows inside forB: ", rows.length);
        }
    }
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    //alert("Clicked Fill All
    let rows = document.getElementsByTagName("tr");
    let cols = document.getElementsByTagName("td");
    for (let row of rows) {
      for (let col of row.childNodes) {
        console.log(col);
        col.style.backgroundColor = colorSelected;
      }
    }
}

function clearAll(){
    //alert("Clicked Clear All")
    let rows = document.getElementsByTagName("tr");
    let cols = document.getElementsByTagName("td");
    for (let row of rows) {
      for (let col of row.childNodes) {
        col.style.backgroundColor = "transparent";
      }
    }
}

function fillU(){
    //alert("Clicked Fill All Uncolored")
    let rows = document.getElementsByTagName("tr");
    let cols = document.getElementsByTagName("td");
    for (let row of rows) {
      for (let col of row.childNodes) {
        if (col.style.backgroundColor === "transparent") {
            col.style.backgroundColor = colorSelected;
        }
      }
    }
}