import React, {Component} from 'react';
import './App.css';
import ListName from './component/ListName.js'
import ListHtmlTag from './component/ListHtmlTag.js'

class App extends Component {
  render() {
    var names = ['Alice', 'Emily', 'Kate'];
    return (
      <div className="App">
        <ListName names={names}/>
        <ListHtmlTag/>
      </div>
    );
  }
}

export default App;
