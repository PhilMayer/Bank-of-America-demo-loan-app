import React, { Component } from 'react';
import ProgressBar from './progress-bar.png';
import './App.css';
import $ from 'jquery';

class App extends Component {

  sendFileToBox () {
    // var form = new FormData();
    //
    // // The content of the file
    // var file = '<p>hey!<p>';
    //
    // // JS file-like object
    // var testing = new Blob([file], { type: 'text/xml'});
    // // Add the file to the form
    // form.append('file', testing);
    //
    // // Add the destination folder for the upload to the form
    // form.append('parent_id', '0');
    // debugger
    //
    // var uploadUrl = 'https://upload.box.com/api/2.0/files/content';
    //
    // // The Box OAuth 2 Header. Add your access token.
    // var headers = {
    //     Authorization: 'Bearer Is8CPcwVj8XWEVK4Mem4p4YUCtXcIcpZ'
    // };

    var selectedFile = document.getElementById('myFile').files[0];
    var form = new FormData();
    form.append('file', selectedFile)
    form.append('parent_id', '0')
    // debugger
    $.ajax({
        url: 'https://upload.box.com/api/2.0/files/content',
        headers: {Authorization: 'Bearer vkFk3gJwLmviyZDqe0p7Bcln7lKfLNHj'},
        type: 'POST',
        processData: false,
        contentType: false,
        dataType: 'json',
        data: form
    }).then(() => console.log("success!!!!"), (e) => console.log(e.responseText))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ProgressBar} alt="progress bar" />
        </div>

        <div className="App-body">
          <h2>Upload your documents</h2>

          <input
            onChange={() => this.sendFileToBox()}
            type="file"
            id="myFile"
            />
        </div>
      </div>
    );
  }
}

export default App;
