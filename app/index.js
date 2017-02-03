import React from 'react'
import ReactDOM from 'react-dom'
import MainContainer from './container/MainContainer'

class App extends React.Component{
  render(){
    return <MainContainer />
  }
}




ReactDOM.render(<App />, document.getElementById('app'))
