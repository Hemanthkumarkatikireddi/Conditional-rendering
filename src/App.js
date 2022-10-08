import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  isAuth = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button type="button">Logout</button>
    }

    return <button type="button">Login</button>
  }

  render() {
    const {isLoggedIn} = this.state

    let auth
    if (isLoggedIn === true) {
      auth = <button type="button">Logout</button>
    } else {
      auth = <button type="button">Login</button>
    }

    return (
      <div className="container">
        <Welcome greeting="Hi" />
        if else Mehod
        {this.isAuth()}
        auth meathod
        {auth}
        one
        {isLoggedIn ? (
          <button type="button">Logout</button>
        ) : (
          <button type="button">Login</button>
        )}
        or
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">Login</button>}
      </div>
    )
  }
}

export default App
