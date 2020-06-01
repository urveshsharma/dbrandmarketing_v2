import React from 'react';

import {PostData} from '../../services/postData';

import './contactUs.scss';

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      responseText: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }


  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    
    PostData('processContactForm.php', data).then((result) => {
      let responseJson = result;
      if(responseJson.userData){
        console.log(responseJson);
        sessionStorage.setItem('userData', JSON.stringify(responseJson));
        this.setState({responseText: 'Form submitted successfully'});
      }
    });



  }

  render() {
    return (
      <div className='container-fluid'>
        <form onSubmit={this.handleSubmit}>
          <div className="formElement">
              <label htmlFor="username">Full Name:</label>
              <input
                name="username"
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
          </div>
          <div className="formElement">
            <label htmlFor="email">Email address:</label>
            <input
              name="email" 
              type="email" 
              className="form-control"  
              placeholder="Enter email" 
            />
          </div>
          <div className="formElement">
            <label htmlFor="phone">Contact Number:</label>
            <input
              name="phone"
              type="text"
              className="form-control"
              placeholder="Contact Number"
            />
          </div>
          <div className="formElement">
            <label htmlFor="query">Query:</label>
            <textarea
              name="query"
              type="text"
              className="form-control"
              placeholder="Your detailed query/comment"
            />
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
        <div>{this.state.responseText}</div>
      </div>
    );
  }
}

export default ContactForm;