const h = require('react-hyperscript')
const React = require('react')
const ListItem = require('./ListItem.js')

const List = React.createClass({
  render: function(){
    return h('main',[
      h('section.list', [
        h('ul',this.props.items.map(item =>
          h(ListItem,{item, onScoreChange: this.props.onScoreChange})
      ))
     ])
    ])
   }
 })

module.exports = List
