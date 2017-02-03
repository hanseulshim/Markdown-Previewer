import React from 'react'
import Main from '../component/Main'
import marked from 'marked'

export default class MainContainer extends React.Component{
  constructor() {
    super()
    this.state = {
      value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    }
  }
  getMarkdownText() {
    let rawMarkup = marked(this.state.value, {sanitize: true});
    return { __html: rawMarkup };
  }
  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }
  render() {
      return <Main markedText={this.getMarkdownText()} onChange={this.handleChange.bind(this)} value={this.state.value}/>
  }
}