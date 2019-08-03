import React from 'react'
import ReactDOM from 'react-dom'

import Intro from './components/Intro'

class App extends React.Component {
  render() {
    return <Intro />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
