import React, {Component} from 'react';
import './App.css';
import ListName from './component/ListName.js'
import ListHtmlTag from './component/ListHtmlTag.js'
import GetRealDOM from './component/GetRealDOM.js'
import FormInput from './component/FormInput.js'
import LifeCircle from './component/LifeCircle.js'

class App extends Component {
  render() {
    var names = ['Alice', 'Emily', 'Kate'];
    return (
      <div className="App">
        <ListName names={names}/>
        <hr/>
        <ListHtmlTag/>
        <hr/>
        <GetRealDOM/>
        <hr/>
        <FormInput/>
        <hr/>
        <LifeCircle name="World"/>
      </div>
    );
  }
}

export default App;
