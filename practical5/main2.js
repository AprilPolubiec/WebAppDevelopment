// Part 1:
// Create a webpage that allows a person to enter two numbers in text fields. Write a JavaScript
// function that reads the two numbers and displays the larger.
// Part 2:
// Extend the solution to part 1 by adding error checking to the values entered by the user. E.g. check
// that numbers and not letters have been entered. If letters have been entered display an appropriate
// message.

handleInput = () => {
  var numberInputs = document.getElementsByTagName("input");
  if (numberInputs[0].value === "" || numberInputs[1].value === "") {
    document.getElementById("submit-btn").disabled = true;
  } else {
    document.getElementById("submit-btn").disabled = false;
  }
  return numberInputs[0].value === "" || numberInputs[1].value === "";
};

handleSubmit = (e) => {
  var numberInputs = document.getElementsByTagName("input");
  var resultEl = document.getElementById("output");
  if (isNaN(numberInputs[0].value) || isNaN(numberInputs[1].value)) {
    resultEl.innerText = `${
      isNaN(numberInputs[0].value)
        ? numberInputs[0].value
        : numberInputs[1].value
    } is not a number`;
    return;
  }
  resultEl.innerText = Math.max(
    parseInt(numberInputs[0].value),
    parseInt(numberInputs[1].value)
  );
};


// Write the JavaScript code to display the elements of the following array in a webpage.
// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

const displayArrays = () => {
    const rowsEl = document.getElementById("rows");
    var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    a.forEach((row, i) => {
        const rowEl = document.createElement("div")
        rowEl.innerText = `Row ${i} = `
        row.forEach(val => {
            rowEl.innerText += `${val} `;
        })
        rowsEl.appendChild(rowEl);
    })
}

displayArrays()

// Write the JavaScript code to create a table and display the ‘variable a’ as rows and columns in this table.

const insertRow = (tableEl, vals) => {
    const row = document.createElement("tr");
    vals.forEach(v => {
        const tdEl = document.createElement("td");
        tdEl.innerText = v;
        row.appendChild(tdEl);
    })
    tableEl.appendChild(row);
    return row;
}

const displayArraysAsTable = () => {
    const tableContainerEl = document.getElementById("rows-table");
    var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    var tableEl = document.createElement("table");
    a.forEach(r => {
        insertRow(tableEl, r)
    })
    tableContainerEl.appendChild(tableEl)
}

displayArraysAsTable()