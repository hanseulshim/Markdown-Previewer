import React from 'react'

const style = {
  marginTop: 50
}

export default class Main extends React.Component{
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea rows="25" cols="45" onChange={this.props.onChange} value={this.props.value} style={style}/>
          </div>
          <div className="col-sm-5">
            <div dangerouslySetInnerHTML={this.props.markedText} style={style}></div>
          </div>
        </div>
      </div>
    )
  }
}