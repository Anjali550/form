let row = null;


function Submit() {
  let dataEntered = retrieveData();
  let readData = readDatafromlocal(dataEntered);
if( row == null){
  insert(readData);
}
else{
  update();
}  


}

// Retrieving data from form
function retrieveData() {
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let arr = [firstName, lastName];
  return arr;
  
}

// Data in localStorage
function readDatafromlocal(dataEntered) {
  //    storing data in local storage
  let f = localStorage.setItem("firstName", dataEntered[0]);
  let l = localStorage.setItem("lastName", dataEntered[1]);

  // getting values from local and table
let f1 = localStorage.getItem("firstName", f);
let l1 = localStorage.getItem("lastName", l);
let arr = [f1,l1];
return arr

}
// insert data
function insert(readData){
    let row = table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = `<button onclick = edit(this)>Edit</button>
                                   <button onclick = remove(this)>Delete</button>`;

}

// Delete
function remove(td){
  
  let ans = confirm("are you sure u want to delete?");
  if(ans == true){
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);  
  }
 
  // deleteRow(0);
  // document.getElementById("table").remove()
  // delete whole table with remove function
}

// Edit
// td = value inside the row
function edit(td){
  let row = td.parentElement.parentElement;
  document.getElementById("fname").value = row.cells[0].innerHTML;
  document.getElementById("lname").value = row.cells[1].innerHTML;
}

// update
function update(){
  row.cells[0].innerHTML = document.getElementById("fname").value;
  row.cells[1].innerHTML =document.getElementById("lname").value;
   row = null;
}
