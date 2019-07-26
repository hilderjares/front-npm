import "@babel/polyfill";
import people from './people';
import $ from 'jquery';
import Client from "./Client";

 
$('<h1> people </h1>').appendTo('body');

console.log(people);
console.log(Client);
console.log(Client.hello());
console.log(Client.send());


// window.moment = require('moment');

// people = require ('./people.js');

// alert('Ola mundo');

// console.log(people);