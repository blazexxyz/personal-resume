import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="contact">

         <div className="row section-head">
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span><a href="tel:+919629300652">{phone}</a></span><br/>
                     <span><a href = "mailto: ravivarmaramadas@gmail.com">{email}</a></span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
