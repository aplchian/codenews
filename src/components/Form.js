const h = require('react-hyperscript')
const React = require('react')

const Form = React.createClass({

    getInitialState: _ => ({
        title: '',
        link: '',
        score: 1
    }),
    setTitle: function(e) {
        this.setState({
            title: e.target.value,
            link: this.state.link
        })

    },
    setLink: function(e) {
        this.setState({
            title: this.state.title,
            link: e.target.value
        })
    },
    onSubmit: function(e) {
        e.preventDefault()
        this.props.onAddArticle(this.state)
        this.setState({
            title: '',
            link: '',
            score: 1
        })
    },
    render: function() {
        return (
            h('section.form', [
                h('form', [
                    h('div', [
                        h('label', 'Title'),
                        h('input', {
                            onChange: this.setTitle,
                            value: this.state.title
                        })
                    ]),
                    h('div', [
                        h('label', 'Link'),
                        h('input', {
                            onChange: this.setLink,
                            value: this.state.link
                        })
                    ]),
                    h('div', [
                        h('button', {
                            onClick: this.onSubmit
                        }, 'Add News')
                    ])
                ])
            ])
        )
    }
})

module.exports = Form
