import React, {Component} from 'react'; 

class Author extends Component {
  getName() {
    alert(this.props.name)
  }
  render() {
    return(
      <div>
        <button onClick={this.getName.bind(this)}>Author</button>
      </div>
    )
  }
}

export default Author;