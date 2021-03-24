var strongs = document.querySelectorAll(`Strong`);

var actionItemTitle = [...strongs].find(
  (item) => item.innerHTML === `Action Items`
);
// actionItemTitle.innerHTML = `The Test Worked!`;

var tableBody = actionItemTitle.closest(`tbody`);
var table = actionItemTitle.closest(`table`);
var actionItemRows = tableBody.querySelectorAll(`tr`);

// Create new tablebody
var newTableBody = document.createElement(`tbody`);
newTableBody.insertAdjacentElement(`beforeend`, actionItemRows[0]);
newTableBody.insertAdjacentElement(`beforeend`, actionItemRows[1]);

// Sort rows
