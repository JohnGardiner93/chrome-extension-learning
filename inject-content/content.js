// --- Condensed Code --- //
////////////////////////////////////////////
// Elements
// Action items table -> Use the strong elements to find
var tableBody = [...document.querySelectorAll(`Strong`)]
  .find(function (item) {
    return item.innerHTML === `Action Items`;
  })
  .closest(`tbody`);
// Action Item Rows

var table = tableBody.closest(`table`);
var actionItemRows = tableBody.querySelectorAll(`tr`);
// Make an Array of Action Item Rows and remove
var newTableRows = [...actionItemRows];

////////////////////////////////////////////
// Sorting
// Remove the first two elements from the action items to be sorted (chart title, column headers)
newTableRows.splice(0, 2);
// Sort the action item elemnts by the first column in each row (sequence #)
newTableRows.sort(function (a, b) {
  return a.children[0].innerHTML - b.children[0].innerHTML;
});

////////////////////////////////////////////
// Make a New Table
var newTableBody = document.createElement(`tbody`);
// Insert the header elements
newTableBody.insertAdjacentElement(`beforeend`, actionItemRows[0]);
newTableBody.insertAdjacentElement(`beforeend`, actionItemRows[1]);
// Insert the sorted rows
newTableRows.forEach(function (el) {
  return newTableBody.insertAdjacentElement(`beforeend`, el);
});

// Remove old table and insert newly-built tablebody
tableBody.remove();
table.insertAdjacentElement(`afterbegin`, newTableBody);

////////////////////////////////////////////
// Initial Code
/*
console.log(`I'm gonna sort your table!`);
////////////////////////////////////////////
// Use the strong elemnts to find the table...
const strongs = document.querySelectorAll(`Strong`);
const actionItemTitle = [...strongs].find(
  (item) => item.innerHTML === `Action Items`
);
console.log(actionItemTitle);
actionItemTitle.innerHTML = `The Test Worked!`;

// Grab the table, tablebody, and table rows
const table = actionItemTitle.closest(`table`);
const tableBody = actionItemTitle.closest(`tbody`);
const actionItemRows = tableBody.querySelectorAll(`tr`);

////////////////////////////////////////////
// Sorting the table contents
console.log(actionItemRows);
// Make the existing table rows into an array
const newTableRows = [...actionItemRows];
// Remove the header elements
newTableRows.splice(0, 2);
console.log(`newTableRows child says:`, newTableRows[0].children[0].innerHTML);
// Sort the rows by the content of the first column (the sequence ID)
newTableRows.sort((a, b) => a.children[0].innerHTML - b.children[0].innerHTML);

console.log(
  `newTableRows sorted child says:`,
  newTableRows[0].children[0].innerHTML
);

////////////////////////////////////////////
// Create the new table
// Create new tablebody element.
const newTableBody = document.createElement(`tbody`);
// Insert the header elements
newTableBody.insertAdjacentElement(`beforeend`, actionItemRows[0]);
newTableBody.insertAdjacentElement(`beforeend`, actionItemRows[1]);
// Insert the sorted rows
newTableRows.forEach((el) =>
  newTableBody.insertAdjacentElement(`beforeend`, el)
);

// Insert newly-built tablebody
tableBody.remove();
table.insertAdjacentElement(`afterbegin`, newTableBody);
*/
