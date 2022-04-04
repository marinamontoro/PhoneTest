
import React, { useState, useContext, useEffect } from 'react'

export default class FileInput extends React.Component {
  constructor(props) {
    // highlight-range{3}
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    // highlight-range{3}
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  render() {
    // highlight-range{5}
    return (
        <label>
          <input type="file" ref={this.fileInput} />
        </label>
    );
  }
}
