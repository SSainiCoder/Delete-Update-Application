import React, {Component} from 'react'
export class Record extends Component {

  //It will render the props details from SetOfRecords component
  render() {
    let {PostTitle, AlbumTitle, Username} = this.props;
    return (
      <>
          <div className="container fw-normal" >
            <p>{PostTitle}</p>
            <p>{AlbumTitle}</p>
            <p>{Username}</p>
          </div>
      </ >
    )
  }
}

export default Record
