import React, { Component } from 'react';
import './App.css';


const list = () => {

}


class App extends Component {
  state = {
    open: false,
    items: [],
    data: []
  }

  handleSelect = (e) => {
    var items = window.$(e.target).val();
    this.setState({ items })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ open: false, data: this.state.items });
  }

  onDelete = (i) => {
    console.log(i, 'onDelete');
  }

  render() {
    const { data } = this.state;
    return (
      <div className="select-container">
        <div className="select-bar" onClick={() => this.setState({ open: !this.state.open })}>
          {data && data.map(i => <React.Fragment><span className="itm">{i} <span className="close-icon" onClick={this.onDelete.bind(this, i)}>x</span></span></React.Fragment>)}
        </div>
        {this.state.open ?<React.Fragment>
          <form onSubmit={this.onSubmit}>
          <select
            multiple
            id="fruits"
            className="custom-mulit-select"
            onChange={this.handleSelect}
          >
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="mango">Mango</option>
            <option value="grape">Grape</option>
            <option value="watermelon">watermelon</option>
            <option value="Apricot">Apricot</option>
            <option value="Peach">Peach</option>
            <option value="lemon">lemon</option>
            <option value="Chilly">Chilly</option>
          </select>
          <input type="submit" style={{ display: 'none' }}></input>
          </form>
        </React.Fragment>
         : null }
      </div>
    );
  }
}

export default App;
