var React = require('react');

//https://facebook.github.io/react/docs/events.html
var Button = React.createClass({

    render: function(){
        var props = this.props;

        return <button onClick={props.whenClicked} className={"btn " + props.className} type="button">
            {props.title}
            <span className={props.subTitleClassName}>{props.subTitle}</span>
        </button>
    }
});

module.exports = Button;
