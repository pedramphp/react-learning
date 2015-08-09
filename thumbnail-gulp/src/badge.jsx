var React = require('react');

var Badge = React.createClass({
    render: function(){
        var props = this.props;

        return <button className="btn btn-primary" type="button">
          {props.title} <span className="badge"> {props.number}</span>
        </button>
    }
});

module.exports = Badge;
