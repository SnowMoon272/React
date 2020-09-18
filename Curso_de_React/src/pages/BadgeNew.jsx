// Librarys
import React, { Component } from "react";
// Components
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
// Images & Css
import header from "../images/badge-header.svg";
import "../components/styles/BadgeNew.css";

class BadgeNew extends Component {
  state = { form: {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
  }};

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={this.state.form.firstName} 
                lastName={this.state.form.lastName}
                email={this.state.form.email}
                jobTitle={this.state.form.jobTitle} 
                twitter={this.state.form.twitter}
                avatarUrl="https://scontent.fmex10-1.fna.fbcdn.net/v/t1.0-1/p200x200/116807141_1417776975087739_3939471401626540445_o.jpg?_nc_cat=100&_nc_sid=7206a8&_nc_eui2=AeGwJlM9VYGSoZLMIE6ZvprGjAwNGpWbPe-MDA0alZs976oYsUmVHd1ZFI0uked6UPLtlSM5nnwEpsSKGDjSiPsG&_nc_ohc=5n9E8oar8NEAX_uxySk&_nc_ht=scontent.fmex10-1.fna&tp=6&oh=45cf7d432d6cf4a50401092c99ed5910&oe=5F81802D" 
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={ this.handleChange } formValues={this.state.form} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew;