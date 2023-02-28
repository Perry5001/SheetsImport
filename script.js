const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMVyT1bIeWOlazjgwn9U1gwW1uZLU2VxH-IdCjOOvKOP5tGSwg3g08IUYM-ubYAUibfskKxaDbjnZY/pub?gid=1477902381&single=true&output=csv"

fetch('http://localhost:3000/data.csv')
  .then(response => response.text())
  .then(data => {
    const parsedData = Papa.parse(data, { header: true }).data;
    // process the parsed data as needed
  })
  .catch(error => {
    console.error(error);
  });
  
