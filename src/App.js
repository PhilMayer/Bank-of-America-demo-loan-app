import React, { Component } from 'react';
import ProgressBar from './progress-bar.png';
import './App.css';
import $ from 'jquery';

class App extends Component {

  sendFileToBox () {
    const file = document.getElementById("myFile")
    console.log(file.value)

    var form = new FormData();

    // JS file-like object
    var toUpload = new Blob([file.value], { type: 'pdf'});

    // Add the file to the form
    form.append('file', toUpload);

    // Add the destination folder for the upload to the form
    form.append('parent_id', '0');

    $.ajax({
      url: "https://upload.box.com/api/2.0/files/content",
      headers: {Authorization: "Bearer VOe8RW3t78uwnsOIBjBX9nWySbDU3aFA"},
      type: 'POST',
      processData: false,
      contentType: false,
      data: form
    }).then(() => console.log("success"))
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
