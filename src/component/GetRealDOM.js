import React, {Component} from 'react';

class GetRealDOM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.handleClick = this.handleClick.bind(this); //构造函数中绑定this
    this.changeVisible = this.changeVisible.bind(this); //构造函数中绑定this
  }

  handleClick() {
    console.log(this)
  }

  changeVisible() {
    this.setState({visible: !this.state.visible});
  }

  refCb(instance) {
    console.log(instance);
  }

  render() {
    return (
      <div>
        <div>
          <button type="button" onClick={this.changeVisible}>{this.state.visible ? '卸载' : '挂载'}ConfirmPass
          </button>
          {
            this.state.visible ?
              <div>User Name:<input type="text" ref={this.refCb}/>
                <input type="button" value="Get Input User Name" onClick={this.handleClick}/></div> : null
          }
        </div>


      </div>
    )
  }

}

export default GetRealDOM