const h = require('react-hyperscript')

module.exports = ({items}) => h('main',[
  h('section.list', [
    h('ul',items.map(item =>
      h('li',[
      h('a',{href: item.link},item.title),
      h('button','Up'), //takes array or string.. wont take component*
      h('button','Down'),
      h('span',item.score)
    ])
  ))
])
])
