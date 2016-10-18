const h = require('react-hyperscript')
const Header = require('./components/Header.js')
const List = require('./components/List.js')
const Forms = require('./components/Form.js')
const React = require('react')




var items = [{
    id: 1,
    title: 'Javascript Fatigue',
    link: 'https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.qtciu77bd',
    score: 0
}, {
    id: 2,
    title: 'Fatigue',
    link: 'https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.qtciu77bd',
    score: 0
}]

const App = React.createClass({
    getInitialState: _ => ({
        items
    }),
    scoreChanged: function(item) {
        this.setState({
            items
        })
    },
    addArticle: function(newItem) {
        console.log(newItem)
        newItem.id = this.state.items.length + 1
        this.setState({
            items: this.state.items.concat([newItem])
        })
    },
    render: function() {

        return (
            h('div.pa4.bg-blue.vh-100', [
                h(Header, {
                    title: 'Alexs News!'
                }),
                h('main', [
                    h(List, {
                        items: this.state.items,
                        onScoreChange: this.scoreChanged
                    }),
                    h(Forms, {
                        items: this.state.items,
                        onAddArticle: this.addArticle
                    }),
                ])
            ])
        )
    }
})


module.exports = App
