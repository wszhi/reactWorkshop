import React, {Component} from 'react';

class ListName extends Component {
  static defaultProps = {
    names: ['A','B','C']
  }
  render() {
    var names = this.props.names;
    return (
      <div>
        {
          names.map(function (name) {
            return <p key={name}>Hello, {name}!</p>
          })
        }
      </div>
    )
  }

}

export default ListName