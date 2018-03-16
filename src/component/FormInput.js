import React, {Component} from 'react';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Sun'
    }
  }
  handleChange(event){
    this.setState({
      value:event.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <p>{this.state.value}</p>
      </div>
    )
  }
}

export default FormInput