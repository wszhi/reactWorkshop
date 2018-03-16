import React, {Component} from 'react'

class CallAPI1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: null
    }
  }

  componentDidMount() {
    this.props.promise.then(
      value => {
        this.setState({
          loading: false,
          data: value
        })
      }, error => {
        this.setState({
          loading: false,
          error: error
        })
      })
  }

  render() {
    if (this.state.loading) {
      return <div>Loading....</div>
    } else if (this.state.error != null) {
      return <div>Error: {this.state.error.message}</div>
    } else {
      let repos = this.state.data.items.map(item => {
        return <li>
          <a href={item.html_url}>{item.name}</a> ({item.stargazers_count}) stars<br/>{item.description}
        </li>
      });
      return (
        <main>
          <h1>most popular javascript projects in github</h1>
          <ul>{repos}</ul>
        </main>
      )
    }
  }
}

export default CallAPI1