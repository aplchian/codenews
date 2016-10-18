const h = require('react-hyperscript')

module.exports = () =>   h('section.form',[
    h('form',[
      h('div',[
        h('label','Title'),
        h('input')
      ]),
      h('div',[
        h('label','Link'),
        h('input')
      ]),
      h('div',[
        h('button','Add News')
      ])
    ])
   ])
