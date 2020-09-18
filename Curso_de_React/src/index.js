// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';
// const container = document.getElementById('app');
// container.appendChild(element);

// Librarys
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import App from './components/App';
// Images & Css
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './global.css';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(
// <Badge 
//   firtName="Manuel R." 
//   lastName="Serrano Torres" 
//   avatarUrl="https://scontent.fmex10-1.fna.fbcdn.net/v/t1.0-1/p200x200/116807141_1417776975087739_3939471401626540445_o.jpg?_nc_cat=100&_nc_sid=7206a8&_nc_eui2=AeGwJlM9VYGSoZLMIE6ZvprGjAwNGpWbPe-MDA0alZs976oYsUmVHd1ZFI0uked6UPLtlSM5nnwEpsSKGDjSiPsG&_nc_ohc=5n9E8oar8NEAX_uxySk&_nc_ht=scontent.fmex10-1.fna&tp=6&oh=45cf7d432d6cf4a50401092c99ed5910&oe=5F81802D" 
//   jobTitle="Fronend Developer" 
//   twitter="SnowMoon272"
//   />, container);

// ReactDOM.render(
// <BadgeNew />, container);

ReactDOM.render(
<App />, container);
