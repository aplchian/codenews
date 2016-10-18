const h = require('react-hyperscript')
const React = require('react')

const Form = React.createClass({

    getInitialState: function(){
      return {title: '',link: ''}
    },
    onSubmit: function(e){
      e.preventDefault()
      console.log()
    },
    updateTitleVal: function(evt){
      this.setState({
        title: evt.target.value
      })
    },
    updateLinkVal: function(evt){
      this.setState({
        link: evt.target.value
      })
    },
    render: function(){
      return(
        h('section.form',[
          h('form',[
            h('div',[
              h('label','Title'),
              h('input',{onChange: this.updateTitleVal})
            ]),
            h('div',[
              h('label','Link'),
              h('input',{onChange: this.updateLinkVal})
            ]),
            h('div',[
              h('button',{onClick: this.onSubmit},'Add News')
            ])
          ])
         ])
    )
  }
})

module.exports = Form
