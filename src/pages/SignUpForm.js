import React, {Component} from 'react';

class SignUpForm extends Component {
render(){
    return (
        <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="Name">Full Name</label>
            <input type="text" id="name" className="FormField__Input" placeholder="Enter Your Full Name" name="name" />
      </div>
      <div className="FormField">
        <label className="FormField__Label" htmlFor="password">Password</label>
        <input type="password" id="name" className="FormField__Input" placeholder="Enter Your password" name="password" />
      </div>
      <div className="FormField">
        <label className="FormField__Label" htmlFor="password">E-Mail Address</label>
        <input type="email" id="email" className="FormField__Input" placeholder="Enter Your email" name="email" />
      </div>
      <div className="FormField">
      <label className="FormField__CheckboxLabel">
        <input className="FormField__checkbox" type="checkbox" name="hasagreed" />I agree all statements in <a href=" " className="FormField__TermsLink">terms od service</a>
        </label>
        </div>
        <div className="FromField">
          <button className="FormField__Button mr-20">Sign Up</button> <a href="#"
          className="FormField__Link">I'm aldrady member</a>
          </div>
      </form>
      </div>
    );
}
}
export default SignUpForm;