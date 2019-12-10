import React, {Component} from 'react';

export default class Forms extends Component {

  constructor(props){
    super(props);

    this.state = {
      q5: '',
    }

    this.changeHandler = this.changeHandler.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);


  }



  changeHandler (e) {
    if(e.target.value !== ''){
      this.setState({
        q5:e.target.value
      });
    } else {

      this.setState({
        q5:''
      });
    }
  }


  handleFormSubmit (e){
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    for (let name of data.keys()) {
      const input = form.elements[name];
      data.set(name, input.value);
    }


    const myHeaders = new Headers({
          "Access-Control-Allow-Origin": "*",
          'origin': '*',
          'Content-type':'application/json'
    })
    // fetch('http://localhost:3000/api/save', {
    //   headers: myHeaders,
    //   method: 'Post',
    //   body: data,

    // });


  //    // preparing header for the CORS request
  //    const myHeaders = new Headers({
  //     "Access-Control-Allow-Origin": "*",
  //     'origin': '*',
  //     'Content-type':'application/json'
  //   })

  // // Request charging based end point for sending and recieving results 
  fetch('http://localhost:3000/api/save', {
      headers: myHeaders,
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(data)),
    })
    .then((response) => console.log(response))
    




  
  }

  render()
    {
      return (
      <div>
        <form onSubmit={this.handleFormSubmit}>

          <label htmlFor="q1">Question 1 </label>
          <input type="text" id="q1" name="q1" ></input>
        
          <br/>

          <label htmlFor="q2">Question 2 </label>
          <input type="text" id="q2" name="q2"></input>
          <br/>

          <label htmlFor="q3">Question 3 </label>
          <input type="text" id="q3" name="q3"></input>
          <br/>

          <label htmlFor="q4">Question 4 </label>
          <input type="text" name="q4" id="q4" ></input>
          <br/>

          <label htmlFor="q5">Question 5 </label>
          <input type="text" id="q5" name="q5" defaultValue={this.state.q5} onChange={this.changeHandler}></input>
          <br/>
          {this.state.q5 !== '' && 
            <div>
             <label htmlFor="q6">Question 6 </label>
             <input type="text" id="q6" value={this.state.q6} name="q6" onChange={this.changeHandler}></input>
             <br/>
            </div>

          }
        
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
