import React from 'react'

import './reduce-toggle.css'

class ReduceToggle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false,
    }
  }

  componentDidMount() {
    const reduceMotionOn = localStorage.getItem('reduceMotionOn')
    if (reduceMotionOn === null) {
      localStorage.setItem('reduceMotionOn', false)
    }
    this.setState({ checked: reduceMotionOn })
  }

  componentDidUpdate() {
    const { checked } = this.state

    if (checked) {
      document.documentElement.setAttribute('data-user-reduced-motion', true)
    } else {
      document.documentElement.setAttribute('data-user-reduced-motion', false)
    }
  }

  toggleChecked = event => {
    localStorage.setItem('reduceMotionOn', event.target.checked)
    this.setState({ checked: event.target.checked })
  }

  render() {
    const { checked } = this.state
    return (
      <div className="toggle">
        <input
          id="reduce-motion"
          checked={checked}
          type="checkbox"
          onChange={this.toggleChecked}
          className="toggle__button"
        />
        <label htmlFor="reduce-motion">
          Reduce Motion is
          {checked ? ' On' : ' Off'}
        </label>
      </div>
    )
  }
}

export default ReduceToggle
