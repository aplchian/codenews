const h = require('react-hyperscript')
const Header = require('./components/Header.js')
const List = require('./components/List.js')
const Forms= require('./components/Form.js')




var items = [
  {  id: 1,
     title: 'Javascript Fatigue', link: 'https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.qtciu77bd',
     score: 0
  }
]

module.exports = () => h('div.pa4.bg-blue.vh-100',[
  Header(),
  h('main',[
    List({items}),
    Forms()
  ])
])
