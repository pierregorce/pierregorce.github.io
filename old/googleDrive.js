/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var CLIENT_ID = '991210954083-b25gk5v3u37ffduvg3v7fqvmbfds24o9.apps.googleusercontent.com';
var SCOPES = 'https://www.googleapis.com/auth/drive';
/**
 * Called when the client library is loaded to start the auth flow.
 */
function handleClientLoad() {
    window.setTimeout(checkAuth, 1);
}

/**
 * Check if the current user has authorized the application.
 */
function checkAuth() {
    gapi.auth.authorize(
            {'client_id': CLIENT_ID, 'scope': SCOPES, 'immediate': true},handleAuthResult);
}

/**
 * Called when authorization server replies.
 *
 * @param {Object} authResult Authorization result.
 */
function handleAuthResult(authResult) {
    var authButton = document.getElementById('authorizeButton');
    //var filePicker = document.getElementById('filePicker');
    authButton.style.display = 'none';
    
    if (authResult && !authResult.error) {
        // Access token has been successfully retrieved, requests can be sent to the API.
        //filePicker.style.display = 'block';
        //filePicker.onchange = uploadFile;
    } else {
        // No access token could be retrieved, show the button to start the authorization flow.
        authButton.style.display = 'block';
        authButton.onclick = function() {
            gapi.auth.authorize(
                    {'client_id': CLIENT_ID, 'scope': SCOPES, 'immediate': false},
            handleAuthResult);
        };
    }
}

/**
 * Start the file upload.
 *
 * @param {Object} evt Arguments from the file selector.
 */
function uploadFile(evt) {
    gapi.client.load('drive', 'v2', function() {
        //var file = evt.target.files[0];

        var file = datas;
        insertMyFile(file);
    });
}


function insertMyFile(oData, callback) {
    
    //alert("Update : "+oData)
    console.log(oData);
    
    
    var fileId = '0B8Yxfc88upiYQlg5TXpXR21YTVk';
    var folderId = '0B8Yxfc88upiYYzg1T3ROQTNCUG8';
    
    const boundary = '-------314159265358979323846';
    const delimiter = "\r\n--" + boundary + "\r\n";
    const close_delim = "\r\n--" + boundary + "--";

    var contentType = "application/octet-stream";
 
    var metadata = {
        'title': 'datas.txt',
        'mimeType': contentType
    };
    

    var multipartRequestBody =
        delimiter +  'Content-Type: application/json\r\n\r\n' +
        JSON.stringify(metadata) +
        delimiter + 'Content-Type: ' + contentType + '\r\n' + '\r\n' +
        oData +
        close_delim;

     if (!callback) { callback = function(file) { 
             console.log("Update Complete ",file);
         }; }

    gapi.client.request({
        'path': '/upload/drive/v2/files/' +folderId+"?fileId="+fileId,
        'method': 'PUT',
        'params': {'uploadType': 'multipart'},
        'headers': {'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'},
        'body': multipartRequestBody,
        callback:callback,
    });
    
   
function loadMyfile(){
    
    var fileId = '0B8Yxfc88upiYbHZBaWFlQ0VMYlk';
    alert(oData);
    return oData;
}


}

/**
 * Print a file's parents.
 *
 * @param {String} fileId ID of the file to insert.
 */
function printParents(fileId) {
  var request = gapi.client.drive.parents.list({
    'fileId': fileId
  });
  request.execute(function(resp) {
    for (parent in resp.items) {
      console.log('File Id: ' + resp.items[parent].id);
    }
  });
}

/**
* Retrieve a list of File resources.
*
* @param {Function} callback Function to call when the request is complete.
*/
function retrieveAllFiles(callback) {
  var retrievePageOfFiles = function(request, result) {
    request.execute(function(resp) {
      result = result.concat(resp.items);
      var nextPageToken = resp.nextPageToken;
      if (nextPageToken) {
        request = gapi.client.drive.files.list({
          'pageToken': nextPageToken
        });
        retrievePageOfFiles(request, result);
      } else {
        callback(result);
      }
    });
  }
  var initialRequest = gapi.client.drive.files.list();
  retrievePageOfFiles(initialRequest, []);
}

/**
 * Download a file's content.
 *
 * @param {File} file Drive File instance.
 * @param {Function} callback Function to call when the request is complete.
 */
function downloadFile(file, callback) {
    if (file.downloadUrl) {
        var accessToken = gapi.auth.getToken().access_token;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', file.downloadUrl);
        xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
        xhr.onload = function() {
            callback(xhr.responseText);
        };
        xhr.onerror = function() {
            callback(null);
        };
        xhr.send();
    } else {
        callback(null);
    }
}


/**
 * Insert new file.
 *
 * @param {File} fileData File object to read data from.
 * @param {Function} callback Function to call when the request is complete.
 */
function insertFile(fileData, callback) {
  const boundary = '-------314159265358979323846';
  const delimiter = "\r\n--" + boundary + "\r\n";
  const close_delim = "\r\n--" + boundary + "--";

  var reader = new FileReader();
  reader.readAsBinaryString(fileData);
  reader.onload = function(e) {
    var contentType = fileData.type || 'application/octet-stream';
    var metadata = {
      'title': fileData.fileName,
      'mimeType': contentType
    };

    var base64Data = btoa(reader.result);
    var multipartRequestBody =
        delimiter +
        'Content-Type: application/json\r\n\r\n' +
        JSON.stringify(metadata) +
        delimiter +
        'Content-Type: ' + contentType + '\r\n' +
        'Content-Transfer-Encoding: base64\r\n' +
        '\r\n' +
        base64Data +
        close_delim;

    var request = gapi.client.request({
        'path': '/upload/drive/v2/files',
        'method': 'POST',
        'params': {'uploadType': 'multipart'},
        'headers': {
          'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
        },
        'body': multipartRequestBody});
    if (!callback) {
      callback = function(file) {
        console.log(file)
      };
    }
    request.execute(callback);
  }
}


