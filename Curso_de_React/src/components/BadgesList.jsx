import React, { Component } from 'react'
import './styles/BadgesList.css';

export class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstailed">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesList">
              <img className="Badge-Avatar" src={badge.avatarUrl} alt="Avatar"/>
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
