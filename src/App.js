import React, { Component } from 'react';
import ProgressBar from './progress-bar.png';
import './App.css';
import $ from 'jquery';

class App extends Component {

  sendFileToBox () {
    var selectedFile = document.getElementById('myFile').files[0];
    var form = new FormData();
    form.append('file', selectedFile)
    form.append('parent_id', '26488864303')

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
