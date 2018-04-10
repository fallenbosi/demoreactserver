import React, { Component } from 'react';
import './App.css';

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content2: ""
    };
   
  }

  
 /* async fetchmetoda(){
    
    var myHeaders = new Headers({
    'Content-Type': 'application/json'
});
    var data={ "text": "I speak English", "from": "en", to: "pt" };

    const options ={
      method: 'POST',
      myHeaders,
      body: JSON.stringify(data)
    };

    const request = new Request ('/server',options);
    const response = await fetch(request);
    console.log(response);

  }*/

 fetchmetoda(){
    const data = {text: "I speak English",
    from: "en",
    to: "nl"};

   fetch('http://localhost:3001/translate', {
    method:'POST',
    header: { "Content-Type": "application/json" },
    body: JSON.stringify(data)

   }).then(function (res){console.log(res)})

  }



  render() {
    return (
    	<div>
            <div className="row justify-content-center">       
              <div className="btn-group-vertical btn-group-toggle mr-3" data-toggle="buttons">
                <label className="btn btn-outline-danger borderrr active " onClick={this.changeName} >
                  <input  type="radio" name="options" id="option1" autoComplete="off" checked/> Shqip
                </label>
                <label className="btn btn-outline-danger borderrr">
                  <input type="radio" name="options" id="option2" autoComplete="off"/> English
                </label>
                <label className="btn btn-outline-danger borderrr">
                  <input type="radio" name="options" id="option3" autoComplete="off"/> German
                </label>
              </div>
              <textarea value={this.state.content2}></textarea>
            </div>

            <div className="row justify-content-center">
              <span className="space"> </span>
              <button onClick={this.fetchmetoda.bind(this)} className="btn btn-outline-warning borderrr borderrrr mt-3">TRANSLATE</button>
              
            </div>
            </div>
    );
  }
}

export default Output;