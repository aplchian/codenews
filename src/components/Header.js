const h = require('react-hyperscript')
const React = require('react')

const Header = React.createClass({
  render: function(){
    return (
      h('header',[
       h('h1.white', this.props.title)
     ])
    )
  }
})

module.exports = Header
