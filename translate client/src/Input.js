import React, { Component } from 'react';
import './App.css';
import Output from './Output'


class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeInput: "asd",
      content: ""
    };
   
  }

  whichOne () {

    let vlera;
    if(document.getElementById("option1").checked)
      vlera="shqip";
    else if(document.getElementById("option2").checked)
      vlera="english";
    else if(document.getElementById("option3").checked)
      vlera="german";

    this.setState({
      typeInput: vlera
    }); 
  }

  changeContent(){
    this.setState({
      content: document.getElementById("10").value
    }); 
  }

  //changeName () {console.log(this.state.type);}


  render() {
    return (
     
      <div className="container mt-3 ">
          <div className="row justify-content-center mb-3">
            
            <div className="btn-group-vertical btn-group-toggle mr-3" data-toggle="buttons">
              <label className="btn btn-outline-danger borderrr active" onClick={this.whichOne.bind(this)}>
                <input type="radio" name="options" id="option1" autocomplete="off" checked/> Shqip
              </label>
              <label className="btn btn-outline-danger borderrr" onClick={this.whichOne.bind(this)}>
                <input type="radio" name="options" id="option2" autocomplete="off"/> English
              </label>
              <label className="btn btn-outline-danger borderrr" onClick={this.whichOne.bind(this)}>
                <input type="radio" name="options" id="option3" autocomplete="off"/> German
              </label>
            </div>
              <textarea onChange={this.changeContent.bind(this)}id="10" spellCheck="false"></textarea>    
            </div>

            <Output typeInput={this.state.typeInput} content={this.state.content}/>

      </div>

    );
  }
}

export default Input;
