import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles/BadgesList.css';
import Gravatar from './Gravatar';

export class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No encontramos ningun Badge</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new Badge
          </Link>
        </div>
      )
    }

    return (
      <ul className="list-unstailed">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesList">
              <Gravatar
                className="Badge-Avatar"
                email={badge.email}
                alt={`Avatar`}
              />
              <div>
                <p>Nombre: {badge.firstName} {badge.lastName}</p>
                <p>Profesión: {badge.jobTitle}</p>
                <p className="Tw"> <img className="LogoT" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/738px-Twitter_bird_logo_2012.svg.png" alt="Twiter"/> @{badge.twitter}</p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList;
