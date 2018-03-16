import React, {Component} from 'react'

class LifeCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1.0
    }
  }

  componentDidMount() {
    setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= 0.3;
      if (opacity <= 0) {
        opacity = 1
      }
      this.setState({
        opacity: opacity
      })
    }.bind(this), 1000)
  }

  render() {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    )
  }
}

export default LifeCircle