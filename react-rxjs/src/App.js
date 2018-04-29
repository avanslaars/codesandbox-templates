import React, { Component } from 'react'
import { interval } from 'rxjs'
import './App.css'

class App extends Component {
  state = {
    tick: 0
  }
  componentDidMount() {
    this.sub = interval(500).subscribe(tick => this.setState({ tick }))
  }

  componentWillUnmount() {
    this.sub.unsubscribe()
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.tick}</h1>
      </div>
    )
  }
}

export default App
