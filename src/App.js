import React from 'react';
import logo from './bounteous_logo.png';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }
    this.toggleClicked = this.toggleClicked.bind(this)
  }

  toggleClicked() {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    return (
      <div className="App">
        <div className="content_box">
          <div className="bottom"> 
            <img src={logo} className="App-logo" alt="logo" />
            <button className={this.state.clicked ? "clicked" : "unclicked"} onClick={() => this.toggleClicked()}>{this.state.clicked? "Following" : "Follow" } </button>
            <div className="bottom_text">
              <h1>Bounteous</h1>
              <p>Content, Commerce, and Coffee — 
                <a href="https://www.linkedin.com/in/emma-tilden" className="hash_link">#AEM/CQ5</a>,  
                <a href="https://etilden.github.io/portfolio/" className="hash_link">#Drupal</a>,  
                <a href="https://github.com/etilden" className="hash_link">#Magneto</a>,  and  
                <a href="https://www.merriam-webster.com/dictionary/bounteous" className="hash_link">#UXDesign</a>
              </p> 
              <p className="smaller_text">North America & Europe • <a href="https://www.bounteous.com/" >bounteous.com</a> • Joined March 2009</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
