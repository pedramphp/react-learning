var React = require('react');
var Button = require('./button');
var ListItem = require('./listItem');

var Dropdown = React.createClass({
    handleClick: function(){
        this.setState({
            open: !this.state.open
        });
    },

    handleItemClick: function(item){
        console.log(item);
        this.setState({
            open: false,
            itemTitle: item
        })
    },

    getInitialState: function(){
        return {
            open: false
        }
    },

    render: function(){
        var list = this.props.items.map(function (item){
            return <ListItem item={item}
                            whenItemClicked={this.handleItemClick}
                            className={this.state.itemTitle === item ? "active" : ""} />
        }.bind(this));

        return <div className="dropdown">
            <Button whenClicked={this.handleClick}
                className="btn-default"
                title={this.state.itemTitle || this.props.title}
                subTitleClassName="caret"
            />
        <ul className={"dropdown-menu" + (this.state.open ? " show" : "")}>
                {list}
            </ul>
        </div>
    }
});

module.exports = Dropdown;
