import React from 'react';

import {PostData} from '../../services/postData';

import './sellerReg.scss';

class SellerRegForm extends React.Component {
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

    
    PostData('processSellerRegForm.php', data).then((result) => {
      let responseJson = result;
      if(responseJson.sellRegData){
        console.log(responseJson);
        sessionStorage.setItem('userRegData', JSON.stringify(responseJson));
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
            <label htmlFor="address">Address:</label>
            <textarea
              name="address"
              type="text"
              className="form-control"
              placeholder="Your detailed query/comment"
            />
          </div>
          <div className="formElement">
            <label htmlFor="sellerType">You are a :</label>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="sellerType" value="manufacturer" />Manufacturer
                    </label>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="sellerType" value="wholeseller" />Wholeseller
                    </label>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="sellerType" value="reseller" />Reseller
                    </label>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="sellerType" value="retailer" />Retailer
                    </label>
                </div>
          </div>
          <div className="formElement">
            <label htmlFor="product">Product and Services:</label>
            <textarea
              name="product"
              type="text"
              className="form-control"
              placeholder="Product or services you wish to sell"
            />
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
        <div>{this.state.responseText}</div>
      </div>
    );
  }
}

export default SellerRegForm;