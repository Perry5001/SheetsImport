const sheetID ="1irlmk_gDxKYofa0ygQ56wLWwN8ZSAlYBYubDYMUVCJM"
const clientID = "363918754034-resujk2n1dvosni5q9st4u6jva9cn2l6.apps.googleusercontent.com"
const APIKey = "AIzaSyDBO16jGXqg6QAjrsrjkTPgNDkb0Y-9USg"

// Load the Google Identity Services library
gapi.load('auth2', function() {
  // Initialize the library with your client ID
  gapi.auth2.init({
    client_id: clientID,
  }).then(function(authInstance) {
    // Get the user's ID token
    var user = authInstance.currentUser.get();
    var idToken = user.getAuthResponse().id_token;
    
    // Make a request to the Google Sheets API using the ID token
    fetch('https://sheets.googleapis.com/v4/spreadsheets/' + sheetID + '/values/Playoff!A1:L10', {
      headers: {
        Authorization: 'Bearer ' + idToken
      }
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('Data:', data);
    }).catch(function(error) {
      console.error('Error:', error);
    });
  });
});