const sheetID ="1irlmk_gDxKYofa0ygQ56wLWwN8ZSAlYBYubDYMUVCJM"

// Load the Google API client library
gapi.load('client', initClient);

function initClient() {
  // Set up the API client with your client ID and API key
  gapi.client.init({
    apiKey: 'AIzaSyDBO16jGXqg6QAjrsrjkTPgNDkb0Y-9USg',
    clientId: '363918754034-resujk2n1dvosni5q9st4u6jva9cn2l6.apps.googleusercontent.com',
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly'
  }).then(function() {
    // Make an API call to retrieve data from a spreadsheet
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: sheetID,
      range: 'PLayoffs!A1:L17' // the range of cells you want to retrieve
    }).then(function(response) {
      var data = response.result.values; // the data from the spreadsheet

      // Convert the data to a JavaScript array
      var arrayData = data.map(function(row) {
        return [row[0], row[1], row[2]]; // adjust this based on the number of columns in your spreadsheet
      });

      console.log(arrayData); // display the array in the console
    }, function(reason) {
      console.error('error: ' + reason.result.error.message);
    });
  });
}