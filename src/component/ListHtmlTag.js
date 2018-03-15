import React, {Component} from 'react';

class ListHtmlTag extends Component {
  render(){
    var arr = [
      <h1>Hello world!</h1>,
      <h2>React is awesome</h2>,
    ];
    return(
      <div>{arr}</div>
    )
  }

}

export default ListHtmlTag