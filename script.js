const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMVyT1bIeWOlazjgwn9U1gwW1uZLU2VxH-IdCjOOvKOP5tGSwg3g08IUYM-ubYAUibfskKxaDbjnZY/pubhtml"

fetch(url)
  .then(response => response.text())
  .then(data => {
    const parsedData = Papa.parse(data, { header: true }).data;
    console.log(parsedData);
  });