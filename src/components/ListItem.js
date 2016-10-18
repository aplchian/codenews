const h = require('react-hyperscript')
const React = require('react')

const ListItem = React.createClass({
    upClick: function(event) {
        this.props.item.score = this.props.item.score + 1
        this.props.onScoreChange(this.props.item)
    },
    downClick: function(event) {
        this.props.item.score = this.props.item.score - 1
        this.props.onScoreChange(this.props.item)
    },
    render: function() {
        return (
            h('li', [
                h('a', {
                    href: this.props.item.link
                }, this.props.item.title),
                h('button', {
                    onClick: this.upClick
                }, 'Up'), //takes array or string.. wont take component*
                h('button', {
                    onClick: this.downClick
                }, 'Down'),
                h('span', this.props.item.score)
            ])
        )
    }
})

module.exports = ListItem
