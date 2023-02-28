const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMVyT1bIeWOlazjgwn9U1gwW1uZLU2VxH-IdCjOOvKOP5tGSwg3g08IUYM-ubYAUibfskKxaDbjnZY/pub?gid=1477902381&single=true&output=csv"

fetch('https://example.com/data.csv')
  .then(response => response.text())
  .then(data => {
    const parsedData = Papa.parse(data, { header: true }).data;
    const tableBody = document.querySelector('#my-table tbody');

    // loop through the parsed data and add a new row for each object
    parsedData.forEach(row => {
      const newRow = document.createElement('tr');

      // loop through the object properties and add them as table cells
      Object.values(row).forEach(value => {
        const newCell = document.createElement('td');
        newCell.textContent = value;
        newRow.appendChild(newCell);
      });

      tableBody.appendChild(newRow);
    });
  });
