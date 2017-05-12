import React, { Component } from 'react';
import ProgressBar from './progress-bar.png';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor () {
    super();

    this.state = {
      fileUploaded: false,
      files: []
    }
  }

  sendFileToBox () {
    var selectedFile = document.getElementById('myFile').files[0];
    var form = new FormData();
    form.append('file', selectedFile)
    form.append('parent_id', '26488864303')

    $.ajax({
        url: 'https://upload.box.com/api/2.0/files/content',
        headers: {Authorization: 'Bearer WjP4OwiQ4MD1YEwXCZoODJyvHgZu4Kmr'},
        type: 'POST',
        processData: false,
        contentType: false,
        dataType: 'json',
        data: form
    }).then((response) => {
      const fileName = response.entries[0].name;
      const fileId = response.entries[0].id
      this.setState({
          fileUploaded: true,
          files: this.state.files.concat([[fileName, fileId]])
        })
    }
    )
  }

  render() {
    let files;
    if (this.state.files) {
      files = this.state.files.map((file, idx) => {
        return(
          <p onClick={() => this.previewDoc(file[1])} key={idx}>
            {file[0]}
          </p>
        )
      })
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={ProgressBar} alt="progress bar" />
        </div>

        <div className="App-body">
          <h2>Step 3: Upload your loan application</h2>

          <h3 className={this.state.fileUploaded ? "" : "hidden"}>
            Upload successful. Your documents are being stored securely with Bank of America.
          </h3>

          <div>{files}</div>

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
